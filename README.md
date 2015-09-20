# Always be hacking slides

## Getting started

```bash
gem install reveal-ck
git clone git@github.com:buren/abh.git

# Compile presentation to slides/index.html
reveal-ck generate
```

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

## Works with

* [buren/abh-server](https://github.com/buren.abh-server)
  - Interactive charts backend

3-party:

* reveal-ck gem (render slides from markdown)
* Chartkick.js (easy chart rendering with google charts)
* jQuery.js
