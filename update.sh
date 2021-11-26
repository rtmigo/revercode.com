#!/bin/bash
set -e && cd "${0%/*}"

./build.sh
git add .
git commit -m "update.sh"
git push