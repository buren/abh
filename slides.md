<!-- Bring a TedX "poster" -->
<img class="natural-image" src="images/tb-logo.png">

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

# GOTO

## [jacobburenstam.com/abh](http://jacobburenstam.com/abh)

<small>If you cheat on the slides we'll know...</small>

---

## Lets warm up with a quick poll

---

### How many of you liked the weather today?

<button onclick="submitWeatherPoll(this)" class="btn" data-value="Love it">Love it</button>
<button onclick="submitWeatherPoll(this)" class="btn" data-value="Hate it">Hate it</button>
<button onclick="submitWeatherPoll(this)" class="btn" data-value="Huh?">Huh?</button>

<div id="weather-chart" style="height: 500px; min-width: 310px; max-width: 960px; margin: 0 auto"></div>


---

### How many of you have developed with others?

<button onclick="submitDevWithOthersPoll(this)" class="btn dev-poll-btn" data-value="Many times">Many times</button>
<button onclick="submitDevWithOthersPoll(this)" class="btn dev-poll-btn" data-value="A couple of times">A couple of times</button>
<button onclick="submitDevWithOthersPoll(this)" class="btn dev-poll-btn" data-value="Never">Never</button>
<button onclick="submitDevWithOthersPoll(this)" class="btn dev-poll-btn" data-value="Never developed">Never developed before</button>

<div id="dev-chart" style="height: 500px; min-width: 310px; max-width: 960px; margin: 0 auto"></div>

---

# Thank you

```note
Thank you for letting me be here!
```

---

## Jacob Burenstam

* Full stack developer @ Trialbee
* Open source tinkerer
* Bitcoin.org translator
* Useless code enthusiast

<hr>

* GitHub: [github.com/buren](https://github.com/buren)
* Keybase: [keybase.io/buren](https://keybase.io/buren)

---

## Full stack developer?

![Full stack developer](images/full-stack-developer.jpg)

```note
Full stack can mean pretty much whatever these days.. Basically end-to-end..
```

---


# Background

* Never programmed before
* Failed first two programming exams
  - Believe me, _really_ try not to..

  :sweat_smile:

```note
Saw my first line of code the first day of uni.

```

---

## Slides available on
### https://github.com/buren/abh

<img src="images/github-mark.png" alt="GitHub logo" class="octocat">

---

# Always be hacking

![Always be closing GIF](images/always-be-closing.gif)

```note
Hack on everything.
```

---

## Tl;dr / Conclusion

* Always be
  - hacking
  - learning
* Share what you create
* Collaborate with others

:bomb:

---

# My first program

## (outside school)

---

## Schedule creator

* Text file => calendar file

(I had no idea what I was doing..)

:calendar:

```note
Friend of mine got his Schedule in text format.
Simple Java program that converts it to .ical
```

---

## Find an excuse to learn something

---

## Developed a website/blog for a friend

* HTML? CSS? JS? Ruby? Rails? Servers? DNS? Mail?

(I had no idea what I was doing..)

:neckbeard:

---

Step by step..

---

You don't need to know everything beforehand

Always be hacking..

---

## Best practices

---


1. Names are important

```note
If you don't know what to name it you probably don't know what it is.
```

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

1. Names are important
2. Talk to other about your and their code

```note
Discuss different approaches / Pros and cons
```

---

What is readable code?

---

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

This actually makes the previous code work :trollface:

---

* https://gist.github.com/buren/4f7be9d8dc7a0913e2cf

<img src="images/github-mark.png" alt="GitHub logo" class="octocat">

---

```html
<div id="scatter-chart"></div>
```

```JavaScript
var id = "scatter-chart";
var url = "https://abh-server.herokuapp.com/weight_height_chart";
new Chartkick.ScatterChart(id, url);
```

---
<label style="font-size:16px;" for="height">Height (cm)</label>
<input type="number" id="height" name="height", placeholder="Height (cm)">
<label style="font-size:16px;" for="weight">Weight (kg)</label>
<input type="number" id="weight" name="weight", placeholder="Weight (kg)">
<button id="scatter-form">Submit</button>
<div id="msg-box"></div>
<div id="example-scatter-chart" style="height: 500px; min-width: 310px; max-width: 960px; margin: 0 auto"></div>

---

## Howto

Do your first commit to an open source project.

---

* Translations
  - Bitcoin.org (please help me, ~20 000 words)
  - PrivacyBadger (please help me ~100 words)
  - Various extensions from EFF
* Documentation

---

If you use an open source project more than once

---

![Read the source Luke](images/read-the-source.jpg)

```note
All talks need one of these.
```

---

You really don't need to understand much of it.

---

You'll be

:chart_with_upwards_trend: :rocket: :muscle:

---


## Always be learning

---

## Always be hacking

---

## Thank you for listening.

---

# Questions?

<img class="natural-image" src="images/tb-logo.png"/>

---

## github.com/buren
## keybase.io/buren

<img class="natural-image" src="images/tb-logo.png" style="max-width: 300px;"/>

---

<img class="natural-image" src="images/tb-logo.png"/>

---

<section data-state="soundcloud-page">
  <div id="soundcloud"></div>
</section>

---

<img class="natural-image" src="images/tb-logo.png"/>

<!-- JavaScript for slides.md -->

<!-- Third party dependencies -->
<script src="js/libs/jquery.js"></script>
<!-- <script src="js/libs/highcharts.js"></script> -->
<script src="http://www.google.com/jsapi"></script>
<script src="js/libs/chartkick.js"></script>

<!-- JavaScript -->
<script>
// Address to the demo server
SERVER_ADDR = 'https://abh-server.herokuapp.com';
</script>
<script src="js/log.js"></script>
<script src="js/scatter-chart.js"></script>
<script src="js/resize-hack.js"></script>
<script src="js/player.js"></script>
<script src="js/soundcloud-player.js"></script>
<script src="js/scatter-form.js"></script>

<!-- Polls -->
<script src="js/weather-poll.js"></script>
<script src="js/dev-poll.js"></script>
