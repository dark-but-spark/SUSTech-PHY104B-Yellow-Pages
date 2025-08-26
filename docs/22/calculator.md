# 22 单摆的设计与研究实验

[实验计算器程序](https://github.com/dark-but-spark/PHY104BExperiments-of-Fundamental-Physics/blob/main/22%E5%8D%95%E6%91%86%E7%9A%84%E8%AE%BE%E8%AE%A1%E4%B8%8E%E7%A0%94%E7%A9%B6%E5%AE%9E%E9%AA%8C/calculator.ipynb)

[更好的阅读体验](https://dark-but-spark.github.io/2025/04/01/PHY104BCalculator/22/)

## 初始化部分（不用阅读 直接跳过）



```python
import pandas as pd
import numpy as np
import math
import matplotlib
import matplotlib.pyplot as plt
import os
matplotlib.rcParams['font.sans-serif'] = ['SimHei'] # 用黑体显示中文
def toMarkdown(x,e): # 将数字转换为Markdown格式的科学计数法 精度格式为e
    s=format(x,e)
    l=s.split('e')
    l[1]=str(int(l[1]))
    if(l[1]== '0'):
        return l[0]
    return l[0]+'\\times10^{'+l[1]+'}'

accuracy=".2e"
```

## 读取部分

请将你的数据放在同目录下的`data.txt`文件中，格式如下：

第一行为你的测量次数$m$。

第二行为你每次测量的摆长$l_0$，一共$m$个数，单位为$cm$。

第三行为你每次测量的球的直径$D$，一共$m$个数，单位为$mm$。

第四行为你选择的周期数$N$,和你时间测量的次数$n$。

第五行为你每组实验测量的周期$T$，一共$n$个数,单位为$s$。

参考输入如下：

```
5
72.02 71.91 71.98 71.95 71.97 
20.00 20.02 20.02 20.02 20.02 
50 5
85.75 85.66 85.72 85.79 85.69 
```

请注意，数据文件的格式必须严格按照上述格式，否则程序可能无法正常运行。

下面这段程序的输出是输入的数据的回显，确保数据已正确读取。


```python
f=open('data.txt','r')
m=int(f.readline()) # 第一行 
nextline=f.readline().split() # 第二行
l_0=[float(i) for i in nextline]
nextline=f.readline().split() # 第三行
D= [float(i) for i in nextline]
nextline=f.readline().split() # 第四行
N=int(nextline[0])
n=int(nextline[1])
nextline=f.readline().split()# 第五行
T=[float(i) for i in nextline]

###输出测量的表格（普通格式）
print("普通格式：")
print("摆线长度l_0（cm）:", end="")
for i in range(m):
    print(f"{l_0[i]} ", end="")
print("\n小球直径D（mm）:", end="")
for i in range(m):
    print(f"{D[i]} ", end="")
print("\n摆动周期T（s）:", end="")
for i in range(n):
    print(f"{T[i]} ", end="")
print("")
###输出测量的表格（Markdown格式）
print("Markdown格式：")
print("| $测量序号$ |", end="")
for i in range(m):
    print(f"${i+1}$|", end="")
print("\n|:---:|" + ":---:|" * m)
print("|$摆线长度l_0（cm）$|", end="")
for i in range(m):
    print(f"${l_0[i]}$|", end="")
print("\n|$小球直径D（mm）$|", end="")
for i in range(m):
    print(f"${D[i]}$|", end="")
print("")
print("| $测量序号$ |", end="")
for i in range(n):
    print(f"${i+1}$|", end="")
print("\n|:---:|" + ":---:|" * n)
print("|$摆动周期T（s）$|", end="")
for i in range(n):
    print(f"${T[i]}$|", end="")
print()
```

    普通格式：
    摆线长度l_0（cm）:72.02 71.91 71.98 71.95 71.97 
    小球直径D（mm）:20.0 20.02 20.02 20.02 20.02 
    摆动周期T（s）:85.75 85.66 85.72 85.79 85.69 
    Markdown格式：
    | $测量序号$ |$1$|$2$|$3$|$4$|$5$|
    |:---:|:---:|:---:|:---:|:---:|:---:|
    |$摆线长度l_0（cm）$|$72.02$|$71.91$|$71.98$|$71.95$|$71.97$|
    |$小球直径D（mm）$|$20.0$|$20.02$|$20.02$|$20.02$|$20.02$|
    | $测量序号$ |$1$|$2$|$3$|$4$|$5$|
    |:---:|:---:|:---:|:---:|:---:|:---:|
    |$摆动周期T（s）$|$85.75$|$85.66$|$85.72$|$85.79$|$85.69$|
    

## 计算平均数
使用公式 
$$\bar{x} = \frac{1}{n} \sum_{i=1}^{n} x_i$$
```
(Markdown)
$$\bar{x} = \frac{1}{n} \sum_{i=1}^{n} x_i$$
```

以下代码输出平均值。




```python
###计算平均值
l_0_bar= sum(l_0) / m
D_bar= sum(D) / m
T_bar= sum(T) / n

###输出平均数（普通格式）
print("普通格式：")
print(f"摆线长度l_0的平均值为：{l_0_bar:.2f} cm")
print(f"小球直径D的平均值为：{D_bar:.2f} mm")
print(f"摆动周期T的平均值为：{T_bar:.2f} s")
print("")
###输出平均数（Markdown展开完整计算式格式）
print("Markdown展开完整计算式格式：")
print(f"计算$l_0$的平均值的式子为：$\\bar{{l_0}} = \\frac{{1}}{{n}} \\sum_{{i=1}}^{{n}} l_0(i) = \\frac{{{"+".join([format(i,".2f") for i in l_0])}}}{{{m}}} = {l_0_bar:.2f} cm$")
print(f"计算$D$的平均值的式子为：$\\bar{{D}} = \\frac{{1}}{{n}} \\sum_{{i=1}}^{{n}} D(i) = \\frac{{{"+".join([format(i,".2f") for i in D])}}}{{{m}}} = {D_bar:.2f} mm$")
print(f"计算$T$的平均值的式子为：$\\bar{{T}} = \\frac{{1}}{{n}} \\sum_{{i=1}}^{{n}} T(i) = \\frac{{{"+".join([format(i,".2f") for i in T])}}}{{{n}}} = {T_bar:.2f} s$")
print("")
```

    普通格式：
    摆线长度l_0的平均值为：71.97 cm
    小球直径D的平均值为：20.02 mm
    摆动周期T的平均值为：85.72 s
    
    Markdown展开完整计算式格式：
    计算$l_0$的平均值的式子为：$\bar{l_0} = \frac{1}{n} \sum_{i=1}^{n} l_0(i) = \frac{72.02+71.91+71.98+71.95+71.97}{5} = 71.97 cm$
    计算$D$的平均值的式子为：$\bar{D} = \frac{1}{n} \sum_{i=1}^{n} D(i) = \frac{20.00+20.02+20.02+20.02+20.02}{5} = 20.02 mm$
    计算$T$的平均值的式子为：$\bar{T} = \frac{1}{n} \sum_{i=1}^{n} T(i) = \frac{85.75+85.66+85.72+85.79+85.69}{5} = 85.72 s$
    
    

## 计算 $g$ 并分析误差

$$g=\frac{4\pi^2 \times (l_0+\frac{D}{2})}{(\frac{T}{N})^2}$$

```
(Markdown)
$$g=\frac{4\pi^2 \times (l_0+\frac{D}{2})}{(\frac{T}{N})^2}$$
```

误差分析时 $g_0=9.7887m/s^2$

$$E=\frac{|g-g_0|}{g_0} \times 100\%$$

```
(Markdown)
$$E=\frac{|g-g_0|}{g_0} \times 100\%$$
```


```python
g= 4*math.pi**2 * (l_0_bar/100+D_bar/2000) / (T_bar/N)**2
g_0= 9.7887
e= abs(g-g_0)/g_0 * 100
###输出重力加速度（普通格式）
print("普通格式：")
print(f"计算重力加速度g的值为：{g:.2f} m/s²")
print(f"相对误差为：{e:.2f}%")
print("")
###输出重力加速度（Markdown展开完整计算式格式）
print("Markdown展开完整计算式格式：")
print(f"计算重力加速度$g$的式子为：$g = 4\\pi^2 \\frac{{l_0 + D/10}}{{(\\frac{{T}}{{N}})^2}} = 4\\pi^2 \\frac{{{l_0_bar:.2f} + {D_bar/10:.2f}}}{{(\\frac{{{T_bar:.2f}}}{{{N}}})^2}} = {g:.2f} m/s^2$")
print(f"计算相对误差的式子为：$e = \\frac{{|g - g_0|}}{{g_0}} \\times 100\\% = \\frac{{|{g:.2f} - {g_0:.4f}|}}{{{g_0:.4f}}} \\times 100\\% = {e:.2f}\\%$")
print("")
```

    普通格式：
    计算重力加速度g的值为：9.80 m/s²
    相对误差为：0.12%
    
    Markdown展开完整计算式格式：
    计算重力加速度$g$的式子为：$g = 4\pi^2 \frac{l_0 + D/10}{(\frac{T}{N})^2} = 4\pi^2 \frac{71.97 + 2.00}{(\frac{85.72}{50})^2} = 9.80 m/s^2$
    计算相对误差的式子为：$e = \frac{|g - g_0|}{g_0} \times 100\% = \frac{|9.80 - 9.7887|}{9.7887} \times 100\% = 0.12\%$
    
    

## 计算不确定度

本次实验计算不确定度使用的常数如下：
$$t_{0.95}=2.78，k_{0.95,三角分布}=1.90，k_{0.95,正态分布}=1.95，C=\sqrt 6$$
### A类不确定度
使用公式
$$U_A = \sqrt{\frac{\Sigma(x_i-\bar x)^2}{n*(n-1)}}*t_{0.95}$$

```
(Markdown)
$$U_A = \sqrt{\frac{\Sigma(x_i-\bar x)^2}{n*(n-1)}}*t_{0.95}$$
``` 



```python
t=2.78
k1=1.9
k2=1.95
C=6**0.5
U_a_l_0= np.std(l_0)/(n**0.5)*t
U_a_D=np.std(D)/(n**0.5)*t 
U_a_T=np.std(T)/(n**0.5)*t 

###输出A类不确定度（普通格式）
print("普通格式：")
print(f"摆线长度l_0的A类不确定度U_a(l_0)为：{U_a_l_0:.4e} cm")
print(f"小球直径D的A类不确定度U_a(D)为：{U_a_D:.4e} mm")
print(f"摆动周期T的A类不确定度U_a(T)为：{U_a_T:.4e} s")
print("")

### 输出A类不确定度（Markdown展开完整计算式格式）
print("Markdown展开完整计算式格式：")
print(f"计算摆线长度l_0的A类不确定度$U_a(l_0)$的式子为：$U_{{a,l_0}} = \\sqrt{{\\frac{{\\Sigma(l_{{0,i}}-\\bar l)^2}}{{n*(n-1)}}}}*t_{{0.95}} = {toMarkdown(U_a_l_0,accuracy)} cm$")
print(f"计算小球直径D的A类不确定度$U_a(D)$的式子为：$U_{{a,D}} =\\sqrt{{\\frac{{\\Sigma(D_i-\\bar D)^2}}{{n*(n-1)}}}}*t_{{0.95}} = {toMarkdown(U_a_D,accuracy)} mm$")
print(f"计算摆动周期T的A类不确定度$U_a(T)$的式子为：$U_{{a,T}} = \\sqrt{{\\frac{{\\Sigma(t_i-\\bar t)^2}}{{n*(n-1)}}}}*t_{{0.95}} = {toMarkdown(U_a_D,accuracy)} s$")
print("")
```

    普通格式：
    摆线长度l_0的A类不确定度U_a(l_0)为：4.4895e-02 cm
    小球直径D的A类不确定度U_a(D)为：9.9460e-03 mm
    摆动周期T的A类不确定度U_a(T)为：5.6373e-02 s
    
    Markdown展开完整计算式格式：
    计算摆线长度l_0的A类不确定度$U_a(l_0)$的式子为：$U_{a,l_0} = \sqrt{\frac{\Sigma(l_{0,i}-\bar l)^2}{n*(n-1)}}*t_{0.95} = 4.49\times10^{-2} cm$
    计算小球直径D的A类不确定度$U_a(D)$的式子为：$U_{a,D} =\sqrt{\frac{\Sigma(D_i-\bar D)^2}{n*(n-1)}}*t_{0.95} = 9.95\times10^{-3} mm$
    计算摆动周期T的A类不确定度$U_a(T)$的式子为：$U_{a,T} = \sqrt{\frac{\Sigma(t_i-\bar t)^2}{n*(n-1)}}*t_{0.95} = 9.95\times10^{-3} s$
    
    

### B类不确定度
由于仪器产生 直接计算（不需要读取数据）：

$U_{b,l_0}=\frac{\sqrt{\Delta^2_{人}+\Delta^2_{钢尺}}}{C}*k_{0.95,三角分布}=\frac{\sqrt{(0.05cm)^2+(0.10cm)^2}}{\sqrt{6}}*1.90=8.67\times10^{-2}cm$

$U_{b,D}=\frac{\sqrt{\Delta^2_{人}+\Delta^2_{游标卡尺}}}{C}*k_{0.95,三角分布}=\frac{\sqrt{(0.05mm)^2+(0.1mm)^2}}{\sqrt{6}}*1.90=8.67\times10^{-2}mm$

$U_{b,t}=\frac{\sqrt{\Delta^2_{人}+\Delta^2_{秒表}}}{C}*k_{0.95,正态分布}=\frac{\sqrt{(0.2s)^2+(0.01s)^2}}{\sqrt{6}}*1.95=0.159s$

```
(Markdown)
$U_{b,l_0}=\frac{\sqrt{\Delta^2_{人}+\Delta^2_{钢尺}}}{C}*k_{0.95,三角分布}=\frac{\sqrt{(0.05cm)^2+(0.10cm)^2}}{\sqrt{6}}*1.90=8.67\times10^{-2}cm$

$U_{b,D}=\frac{\sqrt{\Delta^2_{人}+\Delta^2_{游标卡尺}}}{C}*k_{0.95,三角分布}=\frac{\sqrt{(0.05mm)^2+(0.1mm)^2}}{\sqrt{6}}*1.90=8.67\times10^{-2}mm$

$U_{b,t}=\frac{\sqrt{\Delta^2_{人}+\Delta^2_{秒表}}}{C}*k_{0.95,正态分布}=\frac{\sqrt{(0.2s)^2+(0.01s)^2}}{\sqrt{6}}*1.95=0.159s$
```


```python
U_b_l_0=((0.05**2+0.1**2)/6)**0.5*1.9
U_b_D=((0.05**2+0.1**2)/6)**0.5*1.9
U_b_T=((0.2**2+0.01**2)/6)**0.5*1.95
### 输出B类不确定度（普通格式）
print("普通格式：")
print(f"摆线长度l_0的B类不确定度U_b(l_0)为：{U_b_l_0:.4e} cm")
print(f"小球直径D的B类不确定度U_b(D)为：{U_b_D:.4e} mm")
print(f"摆动周期T的B类不确定度U_b(T)为：{U_b_T:.4e} s")
print("")

```

    普通格式：
    摆线长度l_0的B类不确定度U_b(l_0)为：8.6723e-02 cm
    小球直径D的B类不确定度U_b(D)为：8.6723e-02 mm
    摆动周期T的B类不确定度U_b(T)为：1.5942e-01 s
    
    


### 合成不确定度
使用公式
$$U = \sqrt{U_A^2 + U_B^2}$$

``` 
(Markdown)
$$U = \sqrt{U_A^2 + U_B^2}$$
```


```python
U_l_0= (U_a_l_0**2 + U_b_l_0**2)**0.5
U_D= (U_a_D**2 + U_b_D**2)**0.5
U_T= (U_a_T**2 + U_b_T**2)**0.5

# 输出合成不确定度（普通格式）
print("普通格式：")
print(f"摆线长度l_0的合成不确定度U(l_0)为：{U_l_0:.4e} cm")
print(f"小球直径D的合成不确定度U(D)为：{U_D:.4e} mm")
print(f"摆动周期T的合成不确定度U(T)为：{U_T:.4e} s")
print("")
# 输出合成不确定度（Markdown展开完整计算式格式）
print("Markdown展开完整计算式格式：")
print(f"计算摆线长度l_0的合成不确定度$U(l_0)$的式子为：$U_{{l_0}} = \\sqrt{{（{toMarkdown(U_a_l_0,accuracy)})^2 + ({toMarkdown(U_b_l_0,accuracy)})^2}} = {toMarkdown(U_l_0,accuracy)} cm$")
print(f"计算小球直径D的合成不确定度$U(D)$的式子为：$U_D = \\sqrt{{（{toMarkdown(U_a_D,accuracy)})^2 + ({toMarkdown(U_b_D,accuracy)})^2}} = {toMarkdown(U_D,accuracy)} mm$")
print(f"计算摆动周期T的合成不确定度$U(T)$的式子为：$U_T = \\sqrt{{（{toMarkdown(U_a_T,accuracy)})^2 + ({toMarkdown(U_b_T,accuracy)})^2}} = {toMarkdown(U_T,accuracy)} s$")
print("")
```

    普通格式：
    摆线长度l_0的合成不确定度U(l_0)为：9.7654e-02 cm
    小球直径D的合成不确定度U(D)为：8.7291e-02 mm
    摆动周期T的合成不确定度U(T)为：1.6909e-01 s
    
    Markdown展开完整计算式格式：
    计算摆线长度l_0的合成不确定度$U(l_0)$的式子为：$U_{l_0} = \sqrt{（4.49\times10^{-2})^2 + (8.67\times10^{-2})^2} = 9.77\times10^{-2} cm$
    计算小球直径D的合成不确定度$U(D)$的式子为：$U_D = \sqrt{（9.95\times10^{-3})^2 + (8.67\times10^{-2})^2} = 8.73\times10^{-2} mm$
    计算摆动周期T的合成不确定度$U(T)$的式子为：$U_T = \sqrt{（5.64\times10^{-2})^2 + (1.59\times10^{-1})^2} = 1.69\times10^{-1} s$
    
    

### 传递不确定度

$l=l_0+\frac{D}{2} \Rightarrow U_l=\sqrt{U_{l_0}^2+(\frac{U_D}{2})^2}$

```
(Markdown)
$l=l_0+\frac{D}{2} \Rightarrow U_l=\sqrt{U_{l_0}^2+(\frac{U_D}{2})^2}$
```

$(\frac{U_g}{g})^2=(\frac{U_l}{\bar l})^2+(\frac{2U_t}{\bar t})^2$

```
(Markdown)
$(\frac{U_g}{g})^2=(\frac{U_l}{\bar l})^2+(\frac{2U_t}{\bar t})^2$
```



```python
U_l= (U_l_0**2 + (U_D/10)**2)**0.5
l_bar= l_0_bar + D_bar/20
U_g=g*((U_l/l_bar)**2+(U_T/T_bar)**2)**0.5
# 输出传递不确定度（普通格式）
print("普通格式：")
print(f"传递不确定度U(l)为：{U_l:.4e} cm")
print(f"传递不确定度U(g)为：{U_g:.4e} m/s²")
print("")
# 输出传递不确定度（Markdown展开完整计算式格式）
print("Markdown展开完整计算式格式：")
print(f"计算传递不确定度$U(l)$的式子为：$U_l = \\sqrt{{({toMarkdown(U_l_0,accuracy)})^2 + ({toMarkdown(U_D/10,accuracy)})^2}} = {toMarkdown(U_l,accuracy)} cm$")
print(f"计算传递不确定度$U(g)$的式子为：$U_g = g \\sqrt{{(\\frac{{U_l}}{{l_0 + D/10}})^2 + (\\frac{{U_T}}{{T}})^2}} = {g:.4f} \\times \\sqrt{{(\\frac{{{toMarkdown(U_l,accuracy)}}}{{{l_bar:.2f}}})^2 + (\\frac{{{toMarkdown(U_T,accuracy)}}}{{{T_bar:.2f}}})^2}} = {toMarkdown(U_g,accuracy)} m/s^2$")

```

    普通格式：
    传递不确定度U(l)为：9.8044e-02 cm
    传递不确定度U(g)为：2.3390e-02 m/s²
    
    Markdown展开完整计算式格式：
    计算传递不确定度$U(l)$的式子为：$U_l = \sqrt{(9.77\times10^{-2})^2 + (8.73\times10^{-3})^2} = 9.80\times10^{-2} cm$
    计算传递不确定度$U(g)$的式子为：$U_g = g \sqrt{(\frac{U_l}{l_0 + D/10})^2 + (\frac{U_T}{T})^2} = 9.8003 \times \sqrt{(\frac{9.80\times10^{-2}}{72.97})^2 + (\frac{1.69\times10^{-1}}{85.72})^2} = 2.34\times10^{-2} m/s^2$
    
