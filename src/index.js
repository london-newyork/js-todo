'use strict';

const onclickAdd = () => {
    //テキストボックスの値を取得し、初期化する
    const inputText = document.getElementById("addText").value;
    document.getElementById("addText").value = "";

    //未完了リストから指定の要素を削除
    const deleteFromIncompleteList = (target) =>{
        document.getElementById('incompleteList').removeChild(deleteTarget);
    }

    //ul生成
    const ul = document.createElement('ul');
    ul.className = 'newTodoList';
    //li生成
    const createLi = document.createElement('li');
    const li1 = createLi;
    const li2 = createLi;
    const li3 = createLi;

    const completeTarget = ul;
    const deleteTarget = ul;
    //button(完了)生成
    const completeButton = document.createElement('button');

    //未完了リストに追加する関数
    const createIncompleteList = (text) => {

        const funcLi1 = () => {
            li1.className = 's-title';
            li1.innerText = inputText;
        };

        funcLi1(); 
        //もう１つのタイプのli生成

        completeButton.className = 'completeButton';
        completeButton.innerText = '完了';
        li2.className = 'btn-adjust';
        li2.appendChild(completeButton);
        completeButton.addEventListener('click', () => {
            //押された完了ボタンの親タグ(ul)を未完了から削除
            deleteFromIncompleteList(deleteTarget);

            //完了リストに追加する要素
            const addTarget = ul;//newTodoList以下
            
            //ul以下を初期化
            addTarget.textContent = null;
        
            //liタグ生成
            funcLi1();

            //戻すボタン生成
            const backButton = document.createElement('button');
            backButton.innerText = '戻す';
            backButton.addEventListener('click', () => {
                //押された戻すボタンの親タグ(ul)を完了リストから削除
                getCompleteList.removeChild(completeTarget);

                //テキスト取得
                const text = backButton.previousSibling.innerText;
                createIncompleteList(text);

                ul.removeChild(backButton);
            });

            //ulの子要素に各要素を設定
            const li5 = createLi;
            addTarget.appendChild(li5);
            addTarget.appendChild(backButton);

            //完了リスト追加
            const getCompleteList = document.getElementById('completeList');
            getCompleteList.appendChild(addTarget);
        })
        
        document.getElementById('incompleteList').appendChild(completeTarget);
        //button(削除)生成
        const deleteButton = document.createElement('button');
        deleteButton.innerText = '削除';
        li3.appendChild(deleteButton);
        deleteButton.addEventListener('click', () => {
            //押された削除ボタンの親タグ(ul)を未完了から削除
            deleteFromIncompleteList(deleteTarget);
        })

        //ulの子要素に各要素を設定
        function addList(){
            ul.appendChild(li1);
            ul.appendChild(li2);
            ul.appendChild(li3);
        };

        addList();

        //未完了リストに追加
        document.getElementById('incompleteList').appendChild(ul);
    }

    createIncompleteList(inputText);
};

document.getElementById("addButton").addEventListener("click",() => onclickAdd());


// 'use strict';

// const onclickAdd = () => {
//     //テキストボックスの値を取得し、初期化する
//     const inputText = document.getElementById("addText").value;
//     document.getElementById("addText").value = "";

//     //ul生成
//     const ul = document.createElement('ul');
//     ul.className = 'newTodoList';
//     //li生成
//     const li1 = document.createElement('li');
//     li1.className = 's-title';
//     li1.innerText = inputText;

//     //もう１つのタイプのli生成
//     const li2 = document.createElement('li');
//     const li3 = document.createElement('li');

//     const completeTarget = ul;
//     //button(完了)生成
//     const completeButton = document.createElement('button');
//     completeButton.className = 'completeButton';
//     completeButton.innerText = '完了';
//     li2.className = 'btn-adjust';
//     li2.appendChild(completeButton);
//     completeButton.addEventListener('click', () => {
//         console.log(completeTarget);
//         document.getElementById('incompleteList').removeChild(completeTarget);
//         //未完了リストから完了リストへ移動
//         const completedItem = document.getElementById('completeList').appendChild(completeTarget);
//         // console.log(completedItem);
//         //完了リストでリストに戻すボタンを追加
//         // const li4 = completeTarget.createElement('li');

//         const completeButtonRemove = document.getElementsByClassName('complete');
//         const deleteButtonRemove = document.getElementsByClassName('delete');
//         const deleteButtons = () =>{
//             document.getElementById('incompleteList').removeChild(completeButtonRemove);
//             document.getElementById('incompleteList').removeChild(deleteButtonRemove);
//         };
        
//         const btnReturn = () =>{
//             deleteButtons();
//             const createBtnReturn = completedItem.createElement('button').inputText('戻す');
//             completedItem.appendChild(createBtnReturn);
//         };
//         btnReturn();
//     })

    

// document.getElementById('incompleteList').appendChild(completeTarget);
//     //button(削除)生成
//     const deleteButton = document.createElement('button');
//     deleteButton.innerText = '削除';
//     li3.appendChild(deleteButton);
//     deleteButton.addEventListener('click', () => {
//         //押された削除ボタンの親タグ(ul)を未完了から削除
//         const deleteTarget = ul;
//         document.getElementById('incompleteList').removeChild(deleteTarget);
//         // console.log(deleteTarget);
//     })
//     // console.log(deleteButton);

//     //ulの子要素に各要素を設定
//     function addList(){
//         ul.appendChild(li1);
//         ul.appendChild(li2);
//         ul.appendChild(li3);
//     };

//     addList();

//     //未完了リストに追加
//     document.getElementById('incompleteList').appendChild(ul);
//     alert(inputText);
// };

// document.getElementById("addButton").addEventListener("click",() => onclickAdd());

