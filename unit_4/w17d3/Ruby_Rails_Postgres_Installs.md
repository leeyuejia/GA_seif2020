## Rails

Ruby's packages (gems) are installed once on the computer, instead of per project like Node.  Install the gem for rails:

```
sudo gem install rails
```

`rails` is command-line program like, `mkdir`, `cd`, and `ls`, etc.

Use `rails` to generate a new rails project:

```
rails new blog
```

Enter user pwd if it prompts you.

To test that the project is set up correctly:

```
cd blog
rails s
```

Go to http://localhost:3000/

To see the power of rails:

```
^c
rails generate scaffold Post name:string title:string content:text
rails db:migrate
rails s
```

Go to http://localhost:3000/posts

## Postgres

Postgres is a relational database (the opposite of MongoDB).  Let's install it:

```
brew update
brew install postgresql
postgres -D /usr/local/var/postgres
```

Open a new terminal tab:

```
psql -l
```

## Rails with Postgres

```
cd ../
rails new blog2 -d postgresql
```

This will error, so:

```
sudo gem install pg
```

if that doesn't work:

```
sudo env ARCHFLAGS="-arch x86_64" gem install pg
```

or install [postgress.app](https://postgresapp.com/) and

```
gem install pg -- --with-pg-config=/Applications/Postgres.app/Contents/Versions/latest/bin/pg_config
```

and possibly

```
gem install pg -- --with-pg-include='/Applications/Postgres.app/Contents/Versions/latest/include/'
```

finally:

```
rails new blog2 -d postgresql
cd blog2
rails s
```

check: http://localhost:3000.  You should get an error:

```
^c
rails db:create
```

check: http://localhost:3000

```
rails generate scaffold Post name:string title:string content:text
rails db:migrate
rails s
```

go to http://localhost:3000/posts and create some posts

In `psql` tab

```
psql -l
```

You should see `blog_development` and `blog_test` databases available

```
psql blog2_development
SELECT * FROM posts;
```
