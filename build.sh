
cd "$(dirname "$(perl -MCwd -e 'print Cwd::abs_path shift' $0)")" # cd script parent

rm -rf ./docs
hugo -s ./src -d ../docs --minify


#######

#function gp { htmlToGp.sh $(realpath "$1") -gp $(realpath "$2") ; }

#gp public/ru/momentix/index.html googlePlay/momentix-ru.txt
#gp public/momentix/index.html googlePlay/momentix-en.txt