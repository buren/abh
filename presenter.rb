DEADLINE = Time.new(2015, 9, 21, 13, 0, 0).freeze
module LTH;end
module LTH::AlwaysBeHacking;end
String.class_eval   { define_method(:last?) { false } }
NilClass.class_eval { define_method(:last?) { true } }
define_method(:wait)       { puts 'Still not ready..';sleep 3 }
define_method(:any_questions?) { puts 'Any questions?' }
define_method(:feedback)   { puts 'Feedback?' }
class LTH::Presenter < Struct.new(:name)
  define_method(:ready?) { Time.now >= DEADLINE }
  def present(slides); slides.to_a.each { |slide| yield(slide) };end
end
class LTH::AlwaysBeHacking::Slides
  define_method(:initialize) { @slides = File.read('slides.md').split('---') }
  define_method(:to_a) { @slides + [nil] }
end

#
# #######
# #######
# #######
#
include LTH

author = Presenter.new(:jacob)
slides = AlwaysBeHacking::Slides.new

wait until author.ready?

author.present(slides) do |slide|
  print slide
  any_questions? if slide.last?
end
