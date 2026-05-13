import type { APIRoute } from "astro";
import { getBatchRatings } from "../../../lib/ratings";
import type { BatchRatingsResponse } from "../../../lib/types";

// POST /api/ratings
// Body: { slugs: string[] }
export const POST: APIRoute = async ({ request }) => {
	try {
		const body = await request.json();
		const { slugs } = body;

		if (!Array.isArray(slugs)) {
			return new Response(
				JSON.stringify({
					success: false,
					error: "slugs must be an array",
				}),
				{ status: 400, headers: { "Content-Type": "application/json" } },
			);
		}

		const ratingsData = await getBatchRatings(slugs);

		const response: BatchRatingsResponse = {
			success: true,
			data: ratingsData,
		};

		return new Response(JSON.stringify(response), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		console.error("Error fetching batch ratings:", error);
		return new Response(
			JSON.stringify({
				success: false,
				error: "Failed to fetch ratings",
			}),
			{ status: 500, headers: { "Content-Type": "application/json" } },
		);
	}
};
