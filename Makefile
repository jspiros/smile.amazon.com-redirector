EXTENSION_FILES = manifest.json smile.amazon.com-redirector.js
BUILD_FILE = smile.amazon.com-redirector.zip

$(BUILD_FILE): $(EXTENSION_FILES)
	zip -r -FS $(BUILD_FILE) $(EXTENSION_FILES)

clean:
	rm $(BUILD_FILE)
