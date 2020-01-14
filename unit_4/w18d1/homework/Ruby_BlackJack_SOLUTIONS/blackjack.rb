# players, make a class
# name, bankroll, and a hand which is an array to store cards

class Player
  attr_accessor :hand, :bankroll
  attr_reader :name
  def initialize name, bankroll
    @name = name
    @bankroll = bankroll
    @hand = []
  end
  def hand_sum
    @hand[0].value + @hand[1].value
  end
end
#

# make 52 cards
# at least one property value

class Card
  attr_reader :value
  def initialize value
    @value = value
  end
end

# build one set of cards 2- 10, then jack, king queen which are all equal to 10, and ace which will start at 11


def generate_deck
      deck = []
  for j in 1..4
    for i in 1..13
      card_value = i
      if ( i == 1)
        # the ace card
        card_value = 11
      elsif ( i > 10 )
        # jack, queen, king
        card_value = 10
      else
        # card values are equal to their value when not ace, jack, king, queen
        card_value = i
      end
      deck.push(Card.new(card_value))
    end
  end
  deck.shuffle!
end

# Start Game Play

# generate a deck
# make a human player
# make a computer player
play_deck = generate_deck
player = Player.new "Karolin", 100
the_house = Player.new "The House", 100000


# what is game play
# dealer gets two cards
the_house.hand = play_deck.pop(2)
# player gets two cards
player.hand = play_deck.pop(2)
p player.hand_sum
p the_house.hand_sum
# sum the values of the two cards
# compare who has the higher value
# for now, higher value wins

if (player.hand_sum > the_house.hand_sum)
  p "#{player.name} won this hand! #{player.name}'s sum is #{player.hand_sum}"
elsif (player.hand_sum < the_house.hand_sum)
  p "#{the_house.name} won this hand!#{the_house.name}'s sum is #{the_house.hand_sum}"
else
  p "something has gone terribly wrong or there was a tie"
end
