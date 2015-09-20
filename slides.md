<!-- Bring a TedX "poster" -->
<img class="natural-image" src="images/tb-logo.png"/>

```ruby
include LTH

author = Presenter.new(:jacob)
slides = AlwaysBeHacking::Slides.new

wait until author.ready?

author.present(slides) do |slide|
  print slide
  any_questions? if slide.last?
end
```

---

# First of all thank you

---


## Jacob Burenstam

* Full stack developer
* OSS tinkerer
* Bitcoin.org translator
* Useless code enthusiast

<hr>

* GitHub: [github.com/buren](https://github.com/buren)
* Keybase: [keybase.io/buren](https://keybase.io/buren)

---

## Full stack developer?

![Full stack developer](images/full-stack-developer.jpg)

```note
Full stack can mean pretty much whatever these days.
```

---

## Langs & Tools

Started out with Java @ LTH.

* Ruby
* JavaScript
* Elixir
* Clojure

---

## Libraries

* meta-secretary
* Wayback archive
* SiteMapper
* Chartkick.js
* git-story

```note
* Track deployments

* Send URLs to Wayback Machine

* Map all links on a site

* JavaScript charting library

* Normalized git environment & utils
```

---

## Slides available on

```
please-open() {
 xdg-open "$1" || open "$1" # Ubuntu or OSX
}

slides='http://jacobburenstam.com/abh'
please-open slides

github='https://github.com/buren/abh'
please-open github
```

---

# Always be hacking

![Always be closing GIF](images/always-be-closing.gif)

```note
Hack on everything.
```

---

# Background

* Never programmed before
* Failed first two programming exams
  - Believe me, _really_ try not to..


```note
Saw my first line of code the first day of uni.

```

---

# Story

---

## How I ended up writing

## a `Brainfuck` interpreter..

---

## .. in a language that was 22 days old..

---

## by a first time language designer

---

# So..

### What is Brainfuck?

---

Hello world

```
++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+
[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------
.--------.>>+.>++.
```

Brainfuck is a very small Turing-complete language.

---

### tl;dr:
### You can program anything with it.

---

## Building a Brainfuck intrepreter

---


1. I read a blog post "Writing a Brainfuck intrepreter in Nim [lang]".
2. Decided to try to build one in `Ruby`.

https://github.com/buren/bf-interpreter

<img src="images/github-mark.png" alt="GitHub logo" class="octocat">

---

# A while later

### "Show HN: Vivaldi programming language"

https://news.ycombinator.com/item?id=9053694


```note
There was a lot of discussion going on. I looked at the language examples which was not much more than fizzbuzz. I thought that it could be fun to surprise him by building a Brainfuck intrepreter in his language.
```
---

So I decided to build a Brainfuck intrepreter in his language.

---

I began hacking..

---

Hit a wall..

```note
I couldn't figure out how to get the nth char of a string..
```

---

## GitHub Issue #1:

### _Question_: "How do I get the nth char of a string?"

```note
GitHub issues is for those how don't know a way of reporting bugs and other issues for a repository.
```
---

## Answer

### "Whoops— I guess I forgot to add the `at()` method."

---

<div style="margin-top:-150px"></div>

```
class Brainfuck

  fn init(code): do
    self.code     = code
    self.tape     = []
    self.code_pos = 0
    self.tape_pos = 0
  end

  fn run(skip): do
    while (self.tape_pos >= 0 && self.code_pos < self.code.size()): do
      if (self.tape_pos >= self.tape.size()): self.tape.append(0)

      cond
        self.code.at(self.code_pos) == "[": self.do_inc(),
        self.code.at(self.code_pos) == "]": return self.tape.at(self.tape_pos) != 0,
        !skip:                              self.do_code()

      self.code_pos = self.code_pos + 1
    end
  end

  fn do_inc(): do
    self.code_pos = self.code_pos + 1
    let old_pos   = self.code_pos
    while self.run(self.tape.at(self.tape_pos) == 0): do
      self.code_pos = old_pos
    end
  end

  fn do_code(): do
    let code_char = self.code.at(self.code_pos)
    cond
      code_char == "+": self.tape.set_at(self.tape_pos, self.tape.at(self.tape_pos) + 1),
      code_char == "-": self.tape.set_at(self.tape_pos, self.tape.at(self.tape_pos) - 1),
      code_char == ">": self.tape_pos = self.tape_pos + 1,
      code_char == "<": self.tape_pos = self.tape_pos - 1,
      code_char == ".": self.print_char(self.tape.at(self.tape_pos)),
      code_char == ",": self.tape.set_at(self.tape_pos, next_char_ord)
  end

  fn print_char(char): do
    print(char.chr())
  end

  fn next_char_ord(): do
    gets().ord()
  end
end

let hello_world = "++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++."
new Brainfuck(hello_world).run(false)
```

---

https://github.com/buren/vivaldi-bf-interpreter

<img src="images/github-mark.png" alt="GitHub logo" class="octocat">

---


Probably not an issue with Java..

---

## Are any of you following the slides?

```note
Lets measure your devices latency.

Everyone goto jacobburenstam.com/#/{thisSlideNumber}
```

---

<section data-state="soundcloud-page">
  <div id="soundcloud"></div>
</section>

---

## Something interactive

---

```html
<input type="text" id="weight" name="weight", placeholder="Weight (kg)">
<input type="text" id="height" name="height", placeholder="Height (cm)">
<div id="example-scatter-chart"></div>
<script>
// TODO: Update to fetch from URL
var data = [[174.0, 80.0], [176.5, 82.3]];
new Chartkick.ScatterChart("scatter-chart", data);
</script>
```

---

<input type="text" id="weight" name="weight", placeholder="Weight (kg)">
<input type="text" id="height" name="height", placeholder="Height (cm)">
<div id="example-scatter-chart" style="height: 500px; min-width: 310px; max-width: 960px; margin: 0 auto"></div>

---

# GitHub

<img src="images/github-mark.png" alt="GitHub logo" class="octocat">

---

## At GitHub they have something they call "ombuds".

---

"Someone how advocates the use and understanding of a particular codebase."

- GitHub

---

## Best practies

1. Names are important

```note
If you don't know what to name it you probably don't know what it is.
```

---

2. Talk to other about your code (and theirs)

```note
Discuss different approaches / Pros and cons
```

---

Programming in a team yields huge advantages, but also some challenges.

---

What is happening?

```ruby
x = list.first
x.order
# => order something?...
```

---

Tell a story

```ruby
firstInLine = barQueue.first
firstInLine.order
# => much easier to follow..
```

---

What is readable code?

---

## Is this readable code?

Remember the code from the first slide?

```ruby
include LTH

author = Presenter.new(:jacob)
slides = AlwaysBeHacking::Slides.new

wait until author.ready?

author.present(slides) do |slide|
  print slide
  any_questions? if slide.last?
end
```

---

## Is this?

---

```ruby
DEADLINE = Time.new(2015, 9, 21, 13, 0, 0).freeze
module LTH;end
module LTH::AlwaysBeHacking;end
String.class_eval { define_method(:last?) { false } }
NilClass.class_eval { define_method(:last?) { true } }
define_method(:wait) { puts 'Still not ready..';sleep 3 }
define_method(:any_questions?) { puts 'Any questions?' }
define_method(:feedback) { puts 'Feedback?' }
class LTH::Presenter < Struct.new(:name)
  define_method(:ready?) { Time.now >= DEADLINE }
  def present(slides); slides.to_a.each { |slide| yield(slide) };end
end
class LTH::AlwaysBeHacking::Slides
  define_method(:initialize) { @slides = File.read('slides.md').split('---') }
  define_method(:to_a) { @slides + [nil] }
end
```

This actually makes the previous code work.

---

* https://gist.github.com/buren/4f7be9d8dc7a0913e2cf

<img src="images/github-mark.png" alt="GitHub logo" class="octocat">

---

## Howto

Do your first commit to an open source project.

---

* Translations
  - Bitcoin.org (please help me)
  - PrivacyBadger (please help me)
  - Various extensions from EFF
* Documentation
* Installation instructions
* [meta-secretary](https://github.com/trialbee/meta-secretary)

---

If you use an OSS project more than once, read the source code!

---

![Read the source Luke](images/read-the-source.jpg)

```note
All talks need one of these.
```

---

You really don't need to understand much of it.

---

## Always be hacking

### Thank you for listening.

---

# Questions?

<img class="natural-image" src="images/tb-logo.png"/>

---

## github.com/buren
## keybase.io/buren

<img class="natural-image" src="images/tb-logo.png" style="max-width: 300px;"/>

<!-- JavaScript for slides.md -->

<!-- Third party dependencies -->
<script src="js/libs/jquery.js"></script>
<script src="js/libs/highcharts.js"></script>
<script src="js/libs/chartkick.js"></script>

<!-- JavaScript -->
<script src="js/log.js"></script>
<script src="js/scatter-chart.js"></script>
<script src="js/resize-hack.js"></script>
<script src="js/player.js"></script>
<script src="js/soundcloud-player.js"></script>
