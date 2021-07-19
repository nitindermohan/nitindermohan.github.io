#!/bin/bash

#gs -sDEVICE=png16m -dDownScaleFactor=3 -r200 -sOutputFile=EF_first_page.png -dLastPage=1 EF_Nitinder_Jussi_UH_Final.pdf

#ghostscript options
sDEVICE="png16m"
dDownScaleFactor="3"

# supply path to image or dir
path=$(echo $1 | sed 's:/*$::')

if [[ -d $path ]]; then  # if the path is a directory
    echo "$path is a directory"

    for i in $path/*.pdf; do 	#loop through all pdfs
    	# [ -f "$file_name" ] || break
    	
    	file_name="${i##*/}"

    	echo "Processing $file_name"
    	
    	# get filename without extension
    	file="${file_name%.*}"
		pngFile="$file.png"
		pngPath="$path/$pngFile"

		gs -sDEVICE=$sDEVICE -dDownScaleFactor=$dDownScaleFactor -dBATCH -dNOPAUSE -r200 -sOutputFile=$pngPath -dLastPage=1 $i
	done

elif [[ -f $path ]]; then  # if the path is a file
    echo "$path is a file"

    # extract filename
	file_name="${path##*/}"
	file_path="${path%/*}"
	echo "Processing $file_name"
	
	# check if extension is pdf
	file_extension="${file_name##*.}"
	if [[ $file_extension != "pdf" ]]; then
		echo "$file_name is not a PDF. Please provide a PDF file. Exiting!"
		exit 1
	fi

	# get filename without extension 
	file="${file_name%.*}"
	pngFile="$file.png"
	pngPath="$file_path/$pngFile"

	gs -sDEVICE=$sDEVICE -dDownScaleFactor=$dDownScaleFactor -dBATCH -dNOPAUSE -r200 -sOutputFile=$pngPath -dLastPage=1 $path

else	# if invalid path or nothing provided
    echo "$path is not valid"
    exit 1
fi

