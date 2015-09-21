# Always be hacking - Slides

_Note_: The slides come with an open source server implementation. You can deploy it with one click over at [buren/abh-server](https://github.com/buren.abh-server), in a few minutes, without any additional configuration.

## Getting started

```bash
gem install reveal-ck
git clone git@github.com:buren/abh.git

# Compile presentation to slides/index.html
reveal-ck generate
```

If you want to change the server address to point to your own, change `SERVER_ADDR` defined in `slides.md`.

## Compile presentation

```bash
reveal-ck generate
```

Open `slides/index.html`.

## Watch for changes

Start server that watches for file changes

```
$ reveal-ck serve
```

Open `localhost:10000`.

## Dependencies

* reveal-ck gem (render slides from markdown)
* Chartkick.js (easy chart rendering with google charts)
* jQuery.js
