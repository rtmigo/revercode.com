set -e
cd "$(dirname "$(perl -MCwd -e 'print Cwd::abs_path shift' $0)")" # cd script parent
cd ./src
hugo server -w -D
 #--minify