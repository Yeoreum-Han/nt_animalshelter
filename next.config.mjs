/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/:aniaml/:cities/selectResult',
                destination: `${process.env.NEXT_PUBLIC_DATA_URL}?numOfRows=223&pageNo=1&_type=json&serviceKey=${process.env.NEXT_PUBLIC_API_ENC_KEY}`,
            },
        ]
    },
};

export default nextConfig;
