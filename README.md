# React with subpath hosted on Azure Static Web Apps

This is a sample React application that is configured to be deployed to Azure Static Web Apps with a subpath. It accompanies this blog post: https://blog.thomasgauvin.com/react-swa-with-subpath

Essentially, it builds the React application to /build/foobar, configures Azure Static Web Apps to redirect the base path to the subpath, and configures React Router to expect this. For more details, refer to the blog post
