#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

export JSB_HOME=$DIR

/bin/bash -c "java -cp ${JSB_HOME}/js.jar org.mozilla.javascript.tools.shell.Main -strict ${JSB_HOME}/jsb_main.js $@"

