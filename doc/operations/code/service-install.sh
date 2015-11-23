xp@my-server:/opt$ sudo curl -O http://repo.enonic.com/public/com/enonic/xp/distro/6.3.0/distro-6.3.0.zip

xp@my-server:/opt$ sudo unzip -qq distro-6.3.0.zip 

xp@my-server:/opt$ sudo ln -s enonic-xp-6.3.0 xp

xp@my-server:/opt$ sudo rm distro-6.3.0.zip

xp@my-server:/opt$ ll
total 91208
drwxr-xr-x  3 root root     4096 Nov 23 10:09 ./
drwxr-xr-x 23 root root     4096 Dec  5  2012 ../
drwxr-xr-x  8 root root     4096 Nov 23 10:10 enonic-xp-6.3.0/
lrwxrwxrwx  1 root root       24 Nov 23 10:10 xp -> enonic-xp-6.3.0/

xp@my-server:/opt$ 