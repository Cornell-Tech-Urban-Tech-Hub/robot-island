export interface Rating {
	id: string; // UUID
	score: number; // 1-5
	timestamp: number; // Unix timestamp
	sessionId: string; // Browser fingerprint
}

export interface CaseStudyRatings {
	slug: string;
	ratings: Rating[];
	summary: {
		totalRatings: number;
		averageScore: number;
		distribution: Record<number, number>; // { 1: 2, 2: 5, 3: 10, 4: 8, 5: 12 }
	};
}

export interface RatingAPIResponse {
	success: boolean;
	data?: CaseStudyRatings;
	error?: string;
	userRating?: number; // Current session's rating if exists
}

export interface BatchRatingsResponse {
	success: boolean;
	data?: Record<string, CaseStudyRatings>;
	error?: string;
}
