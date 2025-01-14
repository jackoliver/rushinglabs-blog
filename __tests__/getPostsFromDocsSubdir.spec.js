
/**
 * getPostsFromDocsSubdir
 */
describe("Docs - Get all docs underneath a specific /docs subdir", () => {
    test("it should return each section with its corresoponding posts", () => {
        // Test for this structure to return
        /**
     * [
     *   {
     *     section: 'owasp',
     *     docs: ['01.mdx', '02.mdx']
     *   },
     *   {
     *     section: 'general',
     *     docs: ['stuff', 'asdf', 'what']
     *   }
     * ]
     */
    });

    test("it should return the posts for one section", () => {
        const input = 'owasp';
        // or... const input = getSubdirs()[0] // the first subdir

        // This structure should come back
        /**
         * [{ section: '', docs: ['', '']}]
         */
    })
})
})
