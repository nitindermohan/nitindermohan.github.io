#!/bin/bash
# thumbnail-extract.sh
# Extract a thumbnail image from the first page of a PDF file. Use the same name as the input file, but with a .png extension.
# Usage: thumbnail-extract.sh relative/path/to/input.pdf

# Check for the correct number of arguments
if [ $# -ne 1 ]; then
  echo "Usage: $0 relative/path/to/input.pdf"
  exit 1
fi

# Check that the input file exists
if [ ! -f "$1" ]; then
  echo "Error: File not found: $1"
  exit 1
fi

# Extract the thumbnail image
gs -dSAFER -dNOPAUSE -dBATCH -sDEVICE=png16m -dTextAlphaBits=4 -dGraphicsAlphaBits=4 -r300 -dDownScaleFactor=4 -dFirstPage=1 -dLastPage=1 -sOutputFile="${1%.pdf}.png" "$1"

# Check if the extraction was successful
if [ $? -ne 0 ]; then
  echo "Error: Thumbnail extraction failed"
  exit 1
fi

echo "Thumbnail image extracted successfully: ${1%.pdf}.png"

# End of script
