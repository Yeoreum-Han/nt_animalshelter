/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            // {
            //     source: '/:aniaml/:cities/selectResult/api',
            //     destination: '/:aniaml/:cities/selectResult',
            // },
            // {
            //     source: '/searchResult/api',
            //     destination: '/searchResult',
            // },
            {
                source: '/:animal/:cities/selectResult/api',
                destination: '/:animal/:cities/selectResult',
            },
            {
                source: '/searchResult/api',
                destination: '/searchResult',
            },

        ]
    },
};

export default nextConfig;
