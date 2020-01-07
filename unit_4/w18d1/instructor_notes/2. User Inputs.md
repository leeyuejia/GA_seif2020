
Title: Ruby Console Game<br>
Creator: Thom Page <br>
Competencies: Basic Ruby and Classes<br>

---

# Ruby Console Game

**Input and output**

`p` vs `puts` vs `print`

* `p` calls `.inspect` on an element, which will display it with all its information including quotes, if it is a string.
* `puts` just prints the element (without extra information) and like `p`, includes a newline char `\n`
* `print` also just prints, but does not include a newline char.


`gets`

You can get input from a user in the console using `gets`.

```ruby
puts "Write something: "
input = gets
puts "You wrote: #{input}"
```

`gets` also includes the newline char `\n`, therefore a check on the input will need to include it:

```ruby
if input == "something\n" puts "YOU WROTE SOMETHING"
```

Alternatively, we can use `.chomp` to remove the newline char.

```ruby
input = gets.chomp
```

**Beginning hangman**

```ruby
dictionary = ["potato", "honey", "tea", "rice", "quinoa"]

word = dictionary.sample

puts "Guess which word I secretly chose!"
puts "The word has #{word.length} letters."

input = gets.chomp

if input == word
	puts "Yep. You got it. The word was #{word}."
else
	puts "WRONG"
	puts "(t)ry again or (q)uit?"
	again = gets.chomp.downcase
	if again == "q" then puts "ok" end
end
```

**Indefinite looping**

```ruby
loop do
	input = gets.chomp

	if input == word
		puts "Yep. You got it. The word was #{word}."
		break
	else
		puts "WRONG"
		puts "(t)ry again or (q)uit?"
		again = gets.chomp.downcase
		break if again == "q"
	end
end
```
## Extra

**Create a class to handle the state of a word**

Each word is its own object, objects have **state**. We can track and update the state of that object.

```ruby
class Word

	def initialize word
		letters = word.split('')
		@letters_display = letters.map do |l|
			{ letter: l, hidden: true }
		end
	end

	def render
		@letters_display.each do |l|
			if l[:hidden]
				print " _ "
			else
				print l.letter
			end
		end
	end

end
```

**Decoupling**

To make our code a little more manageable, we can separate our classes into their own files.

Make `word.rb` file and put Word class in there.

Require it in `main.rb` with `require_relative "word"`

main.rb

```ruby
require_relative "word"

dictionary = ["potato", "honey", "tea", "rice", "quinoa"]

puts "Hangman! Guess this word"

current_word = Word.new dictionary.sample

loop do
	current_word.render
	input = gets.chomp

	if input == current_word
		puts "Yep. You got it. The word was #{word}."
		break
	else
		puts "WRONG"
		puts "(t)ry again or (q)uit?"
		again = gets.chomp.downcase
		break if again == "q"
	end
end
```

# Exercises

**Show guessed letters**

**Track number of guesses**

**Make a Game object that uses the Word object**
