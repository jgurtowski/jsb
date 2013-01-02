#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

JSB_HOME=$DIR

exec java -Djsb.home=$JSB_HOME -cp ${JSB_HOME}/js.jar org.mozilla.javascript.tools.shell.Main -strict ${JSB_HOME}/jsb_main.js $@

