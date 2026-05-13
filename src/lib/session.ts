const SESSION_KEY = "robot-island-session";

/**
 * Generate a UUID v4
 */
export function generateSessionId(): string {
	return crypto.randomUUID();
}

/**
 * Get session ID from localStorage, or generate a new one if it doesn't exist
 */
export function getOrCreateSessionId(): string {
	if (typeof localStorage === "undefined") {
		// Server-side or localStorage disabled
		return generateSessionId();
	}

	let sessionId = localStorage.getItem(SESSION_KEY);
	if (!sessionId || !isValidUUID(sessionId)) {
		sessionId = generateSessionId();
		localStorage.setItem(SESSION_KEY, sessionId);
	}

	return sessionId;
}

/**
 * Validate UUID v4 format
 */
export function isValidUUID(uuid: string): boolean {
	const uuidRegex =
		/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
	return uuidRegex.test(uuid);
}
