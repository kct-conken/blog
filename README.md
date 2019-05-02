# 北九州高専コンピュータ研究部ブログ

## CMS.jsを利用したブログシステム

## ブランチ構成
各作業はdevelopブランチからfeature/○○という名前でブランチを作成し行う。<br>
全ての作業が完了したら develop -> master の順で merge を行う。<br>
- **master**
    - **develop**
        - **feature/README**
        - **feature/○○**

## フォルダ構成
css内はSMACSSで設計する。<br>
layout, pages, postsはCMS.jsによる。<br>
- **css**
    - **layout**
    - **module**
    - **theme**
- **img**
- **js**
- **layout**
- **pages**
- **posts**

## 利用方法
masterブランチでpostsフォルダの中にマークダウンファイルを作成する。(他の記事を参考にしながら)<br>
右上の Create new file をクリック。<br>
ファイル名は yyyy-mm-dd-title.mdとする。<br>
「---」で囲んだ中にオプションを設定する。<br>
- layout: post
- title: 記事のタイトル
- excerpt: 記事一覧で表示する抜粋の文章
- date: 記事投稿の日付
- tag: タグ
- author: 記事を書いた人

マークダウン記法で記事を書く。<br>
Commit new file をクリックする。<br>
