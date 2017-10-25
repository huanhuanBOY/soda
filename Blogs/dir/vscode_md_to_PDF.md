<center><font size=5>VScode中,包含latex的markdown文件导出pdf</font></center>
###  平台描述：MacOS+VScode1.17.2
__蜀道难，难于上青天。终于弄好了。弄好之后就简单啦。__

* 1: vscode自己就能预览md文件，在mac快捷键是shift+command+V，但是这个文件真的就只是预览，不能导出pdf。预览是实时预览，很棒。

* 2: 既然要把markdown文件导出，那就需要扩展程序。点击菜单里的查看，扩展，搜索markdown pdf，第一个就是。按照安装程序里面的教程安装就行，记得配置文件。不赘述。安装完后对文件点击菜单，mac上就是双手点击。菜单厘米有convert to pdf

* 3: 然后如何让markdown支持latex格式？同样也是安装扩展，搜索Markdown math，同样是查看安装教程。预览就知道已经支持latex了。

* 4: 然后就是特别重要了，第三步之后你就会发现markdown导出之后是不支持latex的。试过很多方法，latex workshop这个扩展很好用。装完之后右键的菜单有个新的preview，所以就不需要markdown自带的preview了。对着preview右击菜单chrome PDF就可以了

### 总结： 全是扩展程序，要注意看扩展的的说明
markdown pdf  + Markdown math  + latex workshop