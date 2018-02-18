# CSS

git log --oneline --stat

git log -p

git log -w 

git log -p fdf5493

git show

git add . 

git tag -a v1.0

git tag -a v1.0 a87984

git log --oneline --decorate

git reset --hard <sha1-commit-id>

git reflog

git log --oneline --decorate --graph --all

git reset --hard HEAD^



git init -- создать репозиторий

git status -- статус

git add -- добавить в stage area

git commit -- добавить коммит

git log -- лог

git branch -- список веток

git branch <name> -- создать новую ветку с указанным именем

git checkout -- переключиться на другую ветку или позицию лога.



git remote -- установить соединение с сервером

git remote -v -- проверка связи

git push origin master



Инициализация:

git remote

git remote add origin https://github.com/ermondel/tsttmp.git

git remote -v

git pull origin master

git push origin master



Конфликт двух коммитов (один в local, другой в remote):

a) сделали разные коммиты (изменения в одном и том же файле) и на сервере и локально

git branch -a -- увидеть скритый бранч origin/master для remotes

git checkout origin/master -- переключиться на origin/master и убедиться что там последнего коммита нету, ибо в этой ветке сидит только то походу, что было с последней связи с сервером.)

git checkout master -- обратно на мастер

git fetch origin -- забираем изменения с сервера

git checkout origin/master -- переключаемся на бранч origin/master и видим наш коммит что сделали на сервере

git checkout master

git diff origin/master master -- смотрим в чем разница в файле последнего коммита

git merge master origin/maste -- сливаем ветки

git status -- смотрим статус

b) вручную исправляем конфликт в файле.

git add testfile.txt

git commit -m "Merge remote tracking branch 'origin/master', conflicts: testfile.txt"

git log

git push origin master -- запушим изменения на сервер



Форк

Выбрать чужой репозитория на нажать кнопку Fork.

Склонировать новосозданный форк к себе на локальную машину:

```
git clone https://github.com/ermondel/create-your-own-adventure.git
```
папка при этом будет создана автоматически (называться будет create-your-own-adventure)
```
cd create-your-own-adventure
```



Апстрим (это связь не со своим форком, а с оригиналом напрямую.)

Алгоритм ниже исп. для разрешения конфликта слияния двух пулл-реквестов.

git remote add upstream https://github.com/udacity/create-your-own-adventure.git

git checkout master

git pull upstream master

git checkout stop-drop-roll

git merge master stop-drop-roll

git commit -m "Merge branch master into stop-drop-roll"

git push origin stop-drop-roll

git checkout master

git push



Создание remote:

git remote add origin https://github.com/try-git/try_git.git



Создание свежего локального репозитория и его remote:

git init

git add README.md

git commit -m "first commit"

git remote add origin https://github.com/ermondel/kottans_frontend.git

git push -u origin master


