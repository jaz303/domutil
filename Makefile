ENTRY := index.js
SRC := $(ENTRY) $(shell find impl *.js)

all: build/domutil.js build/domutil.min.js

clean:
	rm -rf build

build:
	mkdir -p $@

build/domutil.js: build $(SRC)
	browserify -o $@ -s domutil $(ENTRY)

build/domutil.min.js: build/domutil.js
	./node_modules/.bin/uglifyjs $< > $@

.PHONY: all clean