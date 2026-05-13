import { getStore } from "@netlify/blobs";
import type { Rating, CaseStudyRatings } from "./types";

const STORE_NAME = "robot-island-ratings";

function getStoreInstance() {
	return getStore(STORE_NAME);
}

/**
 * Get ratings for a single case study
 */
export async function getRatings(
	slug: string,
): Promise<CaseStudyRatings | null> {
	try {
		const store = getStoreInstance();
		const data = await store.get(`ratings:${slug}`, { type: "json" });
		return data as CaseStudyRatings | null;
	} catch (error) {
		console.error(`Error fetching ratings for ${slug}:`, error);
		return null;
	}
}

/**
 * Save ratings for a single case study
 */
export async function saveRatings(
	slug: string,
	ratings: CaseStudyRatings,
): Promise<void> {
	try {
		const store = getStoreInstance();
		await store.set(`ratings:${slug}`, JSON.stringify(ratings));
	} catch (error) {
		console.error(`Error saving ratings for ${slug}:`, error);
		throw error;
	}
}

/**
 * Batch read ratings for multiple case studies
 */
export async function getBatchRatings(
	slugs: string[],
): Promise<Record<string, CaseStudyRatings>> {
	const results: Record<string, CaseStudyRatings> = {};

	await Promise.all(
		slugs.map(async (slug) => {
			const data = await getRatings(slug);
			if (data) {
				results[slug] = data;
			}
		}),
	);

	return results;
}

/**
 * Calculate summary statistics from ratings array
 */
export function calculateSummary(
	ratings: Rating[],
): CaseStudyRatings["summary"] {
	if (ratings.length === 0) {
		return { totalRatings: 0, averageScore: 0, distribution: {} };
	}

	const totalRatings = ratings.length;
	const sum = ratings.reduce((acc, r) => acc + r.score, 0);
	const averageScore = sum / totalRatings;

	const distribution: Record<number, number> = {
		1: 0,
		2: 0,
		3: 0,
		4: 0,
		5: 0,
	};
	ratings.forEach((r) => {
		distribution[r.score] = (distribution[r.score] || 0) + 1;
	});

	return { totalRatings, averageScore, distribution };
}

/**
 * Add or update a rating for a case study
 */
export function upsertRating(
	existingRatings: CaseStudyRatings | null,
	slug: string,
	score: number,
	sessionId: string,
): CaseStudyRatings {
	const ratings = existingRatings?.ratings || [];

	// Find existing rating from this session
	const existingIndex = ratings.findIndex((r) => r.sessionId === sessionId);

	const newRating: Rating = {
		id:
			existingIndex >= 0
				? ratings[existingIndex].id
				: crypto.randomUUID(),
		score,
		timestamp: Date.now(),
		sessionId,
	};

	if (existingIndex >= 0) {
		ratings[existingIndex] = newRating; // Update
	} else {
		ratings.push(newRating); // Add new
	}

	return {
		slug,
		ratings,
		summary: calculateSummary(ratings),
	};
}

/**
 * Get user's rating for a case study if they've rated it
 */
export function getUserRating(
	ratings: CaseStudyRatings | null,
	sessionId: string,
): number | undefined {
	if (!ratings) return undefined;
	const userRating = ratings.ratings.find((r) => r.sessionId === sessionId);
	return userRating?.score;
}
