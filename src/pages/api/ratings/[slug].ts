import type { APIRoute } from "astro";
import {
	getRatings,
	saveRatings,
	upsertRating,
	getUserRating,
} from "../../../lib/ratings";
import { isValidUUID } from "../../../lib/session";
import type { RatingAPIResponse } from "../../../lib/types";

// GET /api/ratings/:slug?sessionId=xxx
export const GET: APIRoute = async ({ params, url }) => {
	const { slug } = params;

	if (!slug) {
		return new Response(
			JSON.stringify({ success: false, error: "Missing slug" }),
			{ status: 400, headers: { "Content-Type": "application/json" } },
		);
	}

	try {
		const ratings = await getRatings(slug);
		const sessionId = url.searchParams.get("sessionId");

		const response: RatingAPIResponse = {
			success: true,
			data: ratings || undefined,
			userRating:
				sessionId && ratings
					? getUserRating(ratings, sessionId)
					: undefined,
		};

		return new Response(JSON.stringify(response), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		console.error("Error fetching ratings:", error);
		return new Response(
			JSON.stringify({
				success: false,
				error: "Failed to fetch ratings",
			}),
			{ status: 500, headers: { "Content-Type": "application/json" } },
		);
	}
};

// POST /api/ratings/:slug
// Body: { score: number, sessionId: string }
export const POST: APIRoute = async ({ params, request }) => {
	const { slug } = params;

	if (!slug) {
		return new Response(
			JSON.stringify({ success: false, error: "Missing slug" }),
			{ status: 400, headers: { "Content-Type": "application/json" } },
		);
	}

	try {
		const body = await request.json();
		const { score, sessionId } = body;

		// Validate inputs
		if (
			typeof score !== "number" ||
			score < 1 ||
			score > 5 ||
			!Number.isInteger(score)
		) {
			return new Response(
				JSON.stringify({
					success: false,
					error: "Score must be an integer between 1 and 5",
				}),
				{ status: 400, headers: { "Content-Type": "application/json" } },
			);
		}

		if (!sessionId || !isValidUUID(sessionId)) {
			return new Response(
				JSON.stringify({
					success: false,
					error: "Invalid or missing sessionId",
				}),
				{ status: 400, headers: { "Content-Type": "application/json" } },
			);
		}

		// Get existing ratings
		const existingRatings = await getRatings(slug);

		// Upsert the new/updated rating
		const updatedRatings = upsertRating(
			existingRatings,
			slug,
			score,
			sessionId,
		);

		// Save back to storage
		await saveRatings(slug, updatedRatings);

		const response: RatingAPIResponse = {
			success: true,
			data: updatedRatings,
			userRating: score,
		};

		return new Response(JSON.stringify(response), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		console.error("Error submitting rating:", error);
		return new Response(
			JSON.stringify({
				success: false,
				error: "Failed to submit rating",
			}),
			{ status: 500, headers: { "Content-Type": "application/json" } },
		);
	}
};
