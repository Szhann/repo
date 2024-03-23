#!/bin/bash

echo "执行更新脚本。。。。。。。"
echo "==================================="
rm ./Packages
echo "刪除Packages"
dpkg-scanpackages -m ./package/ >Packages
echo "完成Packages"
echo ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
rm ./Packages.gz
echo "刪除Packages.gz"
gzip -c Packages > Packages.gz
echo "重新产生Packages为Packages.gz完成"
echo ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
rm ./Packages.bz2
echo "刪除Paackages.bz2"
bzip2 -fks Packages
echo "重新产生Paackages.bz2完成"
echo "==================================="
echo "脚本执行完成！！！！！！！"
