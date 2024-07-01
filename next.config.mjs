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
                source: '/searchResult/api',
                destination: '/searchResult',
            },
            {
                source: '/:animal/:cities/api',
                destination: '/:animal/:cities/selectResult',
            },

        ]
    },
};

export default nextConfig;
