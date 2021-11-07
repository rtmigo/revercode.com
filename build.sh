#!/bin/bash
set -e && cd "${0%/*}"

rm -rf ./docs
hugo -s ./src -d ../docs --minify
