---
title: 【转】Code Review 程序员的寄望与哀伤
date: '2018-11-24 07:09:43'
type: post
tag: 前端
category: 编程人生
meta:
  -
    name: description
    content: a
  -
    name: keywords
    content: abc
author: cobainby
---

[https://www.jianshu.com/p/ed9654d3a701](https://www.jianshu.com/p/ed9654d3a701)

一个程序员，他写完了代码，在测试环境通过了测试，然后他把它发布到了线上生产环境，但很快就发现在生产环境上出了问题，有潜在的 bug。

事后分析，是生产环境的一些微妙差异，使得这种 bug 场景在线下测试中很难被发现。毕竟想要在测试环境完美的复制生产环境的所有情况也是不太可能的，导致出现了疏漏。对于这类情况，我们在想是否可以通过在线下做一些 Code Review（代码审查）假想线上的环境差异，通过在头脑中的假想上线运行来获得一些概念验证，这样是否能够减少上线后出现 bug 的概率呢？

<!-- more -->

感性

Code Review 是很多软件工程理论和方法学中的重要一环，而且程序员们大多都感性的认识到 Code Review 对于提升代码质量和减少 bug 有帮助，但在我过去工作的这些年里，经历了几家公司，数个不同的团队，却几乎没有把 Code Review 作为必要的一环去执行的团队。

过去，总是在线上出现一些奇怪的疑难问题后，我们一群程序员才围坐一堆，打开相关代码来逐行分析，根据线上现场的尸检来做事后分析和推导，这样的代码审查和分析实际上根本不是 Code Review，也完全违背了 Code Review 的初衷。Code Review 的初衷是在代码进入生产环境前经过同行评审来减少代码出现 bug 的概率。这一点程序员都好理解，提前的 Code Review 就像雷达扫描我们重点关注的代码领地，以期发现或明显或隐藏的威胁因素。

想必很多人都看过一部叫《火影忍者》的漫画，里面有一种忍术技能——白眼。根据忍者能力强弱白眼能观察的距离不同，虽然白眼有近 360° 的观察范围，依然存在观察死角。不是所有的程序员都拥有类似「白眼」的技能，我们在写程序时力求思考的全面，不留死角或盲点，但实际死角或盲点总是存在，随着程序员经验或经历的成长，思考和认识的越发全面（越发接近 360°），拥有了近乎「白眼」的能力，但像白眼一样依然存在盲点。

我们看不到自己的后脑勺，所以假如在我们的后脑勺放上一个伙伴的眼睛，他的视角就弥补了我们自己的盲点。世上没有两片完全一样的树叶，也许也不会有两个认知视角完全重叠的人。

像 Code Review 或结对编程这样的实践正是基于这样的感性认知，试图找出盲点区域的 bug，但到底这样的做法能降低多少出现 bug 的概率呢？

理性

有人对 Code Review 的作用进行了更理性且量化的分析，来自 Wikipedia（维基百科）。

卡珀斯·琼斯（Capers Jones）分析了超过 12,000 个软件开发项目，其中使用正式代码审查的项目，发现潜在缺陷率约在 60-65% 之间，若是非正式的代码审查，发现潜在缺陷率不到 50%。大部份的测试，发现的潜在缺陷率会在 30% 左右。

一般的代码审查速度约是一小时 150 行程式码，对于一些关键的软体（例如安全关键系统的嵌入式软体），一小时审查数百行程式码的审查速度太快，可能无法找到程式中的问题。代码审查一般可以找到及移除约 65% 的错误，最高可以到 85%。

也有研究针对代码审查找到的缺陷类型进行分析。代码审查找到的缺陷中，有 75% 是和计算机安全隐患有关。对于产品生命周期很长的软件公司而言，代码审查是很有效的工具。

从上面的实验分析结果看，Code Review 对于发现潜在缺陷很有用（相比测试能发现的缺陷率高一倍），但也需要投入巨大的时间成本（一小时审查 150 行代码，再快就不利于发现潜在缺陷了），而且更适用于长生命周期的产品。

所以，有个现象就容易理解了。我发现在同一家公司做 Code Review 较多的都是研发通用底层技术产品或中间件的团队，而做业务开发的团队则较少做 Code Review。一方面是底层技术产品或中间件的需求较稳定，且生命周期长，而业务项目（特别是尝试性的新业务）需求不稳定，时间要求紧迫，而生命周期很多都偏短。

困难

通过了理性的分析我们可以看出 Code Review 是有很大好处的，但适用的场景和花费的成本也需要去平衡。除了这点，也许还有一些关于如何实施 Code Review 的困难。

如果把 Code Review 作为一个必要环节引入到研发流程中，也许会引发下面一些问题：项目 deadline 已定，时间紧迫，天天加班忙成狗了，谁还愿意搞Code Review？这是一个最常见的客观阻碍因素，因为 deadline 很多时候都不是我们自己确定的。

即使强推下去，团队认识不到其好处，也不够重视，每次走个过场，Code Review 的效果如何能保障？如果你是一个父亲，为自己的孩子制定一个最简单的规则，比如说：饭前洗手。你如何保障这个规则的实施效果，你当然可以每次吃饭前检查下孩子的手是否干净，但你也很难每顿饭都和孩子一块儿吃，所以你就检查不到了。要是孩子有个智能的碗，当孩子吃饭时手一接触到碗就能检测细菌是否超标，然后发出提醒和拒绝措施，这样是否就保障了这个规则与你在或不在的实施有效性。而 Code Review 显然是个更复杂的规则，需要的智能工具支持也更复杂。

团队人员结构搭配不合理，新人没经验的多，有经验的少。天天安排经验多的少数人帮助 review 多数新人的代码，新人或有收获，但对高级或资深程序员又有多大裨益？一个好的规则或制度总是需要既符合多方参与者的个体利益又能满足组织或团队的共同利益，这样的规则或制度才能顺畅的实施和运转。

若你的团队中存在一些自信超强大的程序员，觉得自己的写的代码绝对没 bug，不需要别人来给我 review。这样的人未必就很差，他写的代码甚至确实出 bug 的概率比普通人更低，但肯定依然存在潜在 bug。这样团队成员的存在，也会成为 Code Review 的一个障碍。

路径

Code Review 确实存在很多各种各样的困难，导致很多团队都能认识到它的好处却实施不下去。尤其在国内，我几乎没听说过严格把 Code Review 作为一项研发制度或规则要求的公司。

但在大洋的另一端，无论是老牌大公司如 Google 或是新近崛起的创业公司如 Airbnb 都把 Code Review 作为上线进入生产环境前强制且必须的一环。在一篇介绍 Google Code Review 的实践文章中说道，在 Google 任何产品，任何工程的代码，在被进行严格或者明确的审查（Code Review）之前，是不允许提交的。你看，Google 通过工具控制在进行 Code Review 前甚至是无法提交代码的。

Google 以一种强硬的姿态来制定关于 Code Review 的且应用于全公司范围内的规则，对任何人都不例外。即使面对团队中超自信且强大的程序员也无例外，要么遵守规则，要么离开组织。这一点从 C 语言和 Unix 的发明者、图灵奖得主、最具传奇性的程序员 Ken Thompson 在 Google 的趣事——作为 C 语言发明者之一因为没有参加 Google 的编程语言能力测试所以无法在 Google 提交 C 代码——从中可以一窥 Google 规则的强硬性。

所以像 Google 这样的公司对于 Code Review 属于高度认可且有公司制度和规则的强硬支持，再辅助自动检测和控制工具的严格执行，方能如此。这也属于一种严格的同步 Code Review，所谓同步就是必须要等待 Code Review 有了结果并无异议后方能提交或上线代码。

但要实施如此严格的同步 Code Review 似乎对大部分国内公司又感觉过于无奈，这需要公司制度、团队文化和技术工具三方面的支持。而在大部分以业务目标、KPI和绩效导向的公司，不说在制度和文化方面得到支持，能不被反对就不错了。关于这一点陈皓（@左耳朵耗子）写过一篇文章《从 Code Review 谈如何做技术》其中写到了在阿里实施 Code Review 遇到的各种文化上的阻碍和反对。而阿里已是国内顶级互联网公司，可见实施同步 Code Review 的路径并不简单。

如果实施同步 Code Review 如此困难，那么是否可以退而求其次，设计一种异步的 Code Review 方式呢？就像我们提升系统性能一样，把一些同步的串行调用变成异步的并行调用，按这个思路 YY 了以下场景。

程序员完成编码，提交测试，测试通过后就去上线发布，另一方面也组织并行的 Code Review。毕竟测试通过只能证明测试覆盖的场景无 bug，但可能代码实现并不优化和合理，而并行的 Code Review 即使发现了潜在问题依然来不及阻止本次上线，但可以为下次上线提供优化点或方向。另外在制度上把 Code Review 作为工程师的日常 KPI，比如：要求每周对其他同事的代码变动做 1～2 次 Review。

而 Review 的方式除了阅读代码，也可以为 Review 的代码提供 Unit Test 间接达到了结对编程的目的。为了确保代码确实被 Review 过需要工具支持，对 Review 过的代码进行签名，对不同的 Review 形式（签名表示读过，Unit Test 表示不仅读过还白盒测试过）进行分类统计，发布 Code Review 统计排行榜和覆盖分析。

以类似这样的方式，逐步培养起交叉 Code Review 的文化和氛围，同时也显性将 Code Review 纳入了程序员的工作业绩之中。一开始不必像同步 Code Review 一样对所有上线进行了阻塞，带来巨大的阵痛。当然这也依然是一个理想化的 YY 场景，实施起来依然需要克服不少困难和准备前提工具。

在另外在一篇叫《谷歌是如何做代码审查的》文章中，一位 Google 的工程师对 Code Review 的认识是：

代码审查的最大的功用是纯社会性的。

还有一个非常重要的好处，代码审查能传播知识。

而防止 bug 混入，这反倒是它最不重要的一点。

第一点是这么理解的，如果你在编程，而且知道一定将会有同事检查你的代码，那么你编程的姿势和态度都会完全不同。之间的微妙差异可类比于你是在为公司的内部系统编程，还是在给开源软件贡献代码。这是一个很有趣的视角，它其实反应了公司的制度和文化。

现实

以前尝试过要在团队内部做 Code Review，听说兄弟团队搞得不错，然后就一起交流经验，最后交流的重心就落在了应该选个什么好用的 Code Review 工具来做，如今想来这完全是舍本逐末了。

这就像以为有了好的编辑器（或 IDE）就能写出好的代码一样，事实就是有很多好用的 Code Review 工具我们依然做不好 Code Review。古龙小说《陆小凤》中有一段描述，记忆尤深：

西门吹雪：此剑乃天下利器，剑锋三尺七寸，净重七斤十三两。

叶孤城：好剑。

西门吹雪：的确是好剑。

叶孤城：此剑乃海外寒剑精英，吹毛断发，剑锋三尺三，净重六斤四两。

西门吹雪：好剑。

叶孤城：本就是好剑。

剑是好剑，但最好先成为像西门吹雪或叶孤城这样的好剑客，再来居高俯视、吹毛断发的谈剑是否是好剑。

即使在最差的环境下，完全没有人关心 Code Review 这件事。一个有追求的程序员依然可以做到一件事，自己给自己 review。就像写文章，我写完一篇文章从来不会立刻发布，而是从头脑中放下（unload），过上一段时间（也许是几小时、也许是几天）再自己重新细读一遍，改掉其中必然会出现的错别字或文句不通畅之处，甚或论据不充分或不准确的地方，因为我知道不管我写了多少文字，总还会有这些 bug，这就是给自己的 review。

即使如此，有时发出去的文章还是依然存在 bug，但总会比不 review 少了些。程序员在估算开发任务时也最好加上自己给自己 review 的时间，给自己 review 是一种自省，自我的成长总是从自省开始。

...

我提交了一段代码，却没人给我 review，稍后我自己给自己 review 了，得到了一段更好的代码和一个更好的自己。

写点程序世间的文字，画点生活瞬间的画儿。
电脑macpro坏了，真是悲伤的一天！！