# extract png of first page pdf (install imagemagick)

gs -sDEVICE=png16m -r1200 -sOutputFile=Nitinder_MTech_Thesis.png -dLastPage=1 Nitinder_MTech_Thesis.pdf

# compres png (install opting)

find . -name "*.png" -exec optipng -o7 {} \;

#single image
optipng -o7 file.png

#compress jpg (install jpegoptim)

find . -name "*.jpg" -exec jpegoptim -m80 -o -p --strip-all {} \;