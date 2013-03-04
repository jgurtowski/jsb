#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

JSB_HOME=$DIR

exec java -Djava.library.path=/bluearc/home/schatz/gurtowsk/local/lib -Djsb.home=$JSB_HOME -cp ${JSB_HOME}/jhdf5.jar:${JSB_HOME}/js.jar:${JSB_HOME}/com.pacbio.hdf5api-1.2.2.1.jar:${JSB_HOME}/jhdfobj.jar:${JSB_HOME}/jhdf.jar:${JSB_HOME}/log4j-1.2.15.jar:${JSB_HOME}/jhdf5obj.jar org.mozilla.javascript.tools.shell.Main -strict ${JSB_HOME}/jsb_main.js $@

