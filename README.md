I spent some time configuring webpack and realized that the Hapi server really needs a separate webpack config than the front-end.
There is currently no hot-reloading due to the files not being served from a webpack dev server.
I didn't want to spend too much time trying to configure that. In production, the client and server would be in separate repos.