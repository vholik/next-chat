/** @type {import('next').NextConfig} */
const path = required('path');

const nextConfig = {
    reactStrictMode: true,
    // basePath: "/src",
    sassOptions: {
        includePaths: [path.join(__dirname, 'src')],
    },
};

module.exports = nextConfig;
