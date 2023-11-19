let array = []
const search_num = document.getElementById("input_num")
const find_num = document.getElementById("find_num")
const check = document.getElementById("check")


const algorithm = document.getElementById('selected_algorithm')
const amount = document.getElementById('num_of_values')
const repeats = document.getElementById('repeat_values')
const start = document.getElementById('button')
const btn_download = document.getElementById('btn_download')
const save_result = document.getElementById('save_file')
const load_result = document.getElementById('load_result')
let result_exec = document.getElementById('result')
let result_exec2 = document.getElementById('result2')
let info = document.getElementById('machine_info')
let min = document.getElementById('min')
let max = document.getElementById('max')

let counter
let min_time
let avg_time
let max_time
let time_array


function fillArray(amount) {
    const array = []
    for (let i = 0; i < amount; i++) {
        array.push(Math.floor(Math.random() * 1000000))
    }
    return array
}

start.addEventListener("click", () => {
    alert("start...")
    time_array = []
    min_time = 0
    avg_time = 0
    max_time = 0
    counter = 0
    result_exec.innerHTML = ""
    result_exec2.innerHTML = ""
    info.innerHTML = ""
    load_result.style.visibility = "hidden"
    save_result.style.visibility = "hidden"
    find_num.style.visibility = "hidden"
    check.style.visibility = "hidden"
    if (algorithm && algorithm.value) {
        switch (algorithm.value) {

            case "bubble_sort": {
                array = []
                alert()
                console.log(`Выбран алгоритм сортировки : ${algorithm.value}`)
                for (let i = 0; i < parseInt(repeats.value); i++) {
                    console.log(`Программа запустилась с массивом размера : ${amount.value}`)
                    console.log(`Программа будет повторять весь процесс еще : ${repeats.value - i} ${repeats.value > 1 ? "раза" : "раз"}`)
                    array = fillArray(parseInt(amount.value))
                    console.log(array)
                    let start_time = Date.now()
                    bubble_sort(array)
                    let end_time = Date.now()
                    amount_of_time = end_time - start_time

                    if (i >= 0) {
                        time_array.push(amount_of_time)
                    }

                }
                time_array.sort()
                min = `<div>Минимальное время : ${time_array[0]} мс.</div>`
                max = `<div>Максимальное время : ${time_array[time_array.length - 1]} мс.</div>`

                for (let i = 0; i < time_array.length - 1; i++) {
                    avg_time += time_array[i]
                }

                avg_time > 0 ? avg_time /= time_array.length : 0
                console.log(`Массив времени работы : ${time_array}`)
                result_exec.innerHTML += `\nСреднее время сортировки : \t${avg_time} мс.`
                info.innerHTML += `Ядер процессора использовано : ${navigator.hardwareConcurrency}` + "\n"
                result_exec2.innerHTML += `Количество операций : ${counter}`

                if (result_exec.innerHTML.length > 1) {
                    load_result.style.visibility = "visible"
                    result_exec.style.visibility = "visible"
                    find_num.style.visibility = "visible"
                    check.style.visibility = "visible"
                    result_exec2.style.visibility = "visible"
                    btn_download.addEventListener("click", () => {
                        download(array, "Назови_меня_пожалйста.txt", "text/plain")
                        save_result.style.visibility = "visible"
                    })
                }
                break;
            }
            case "insertion_sort": {
                array = []
                alert()
                console.log(`Выбран алгоритм сортировки : ${algorithm.value}`)
                for (let i = 0; i < parseInt(repeats.value); i++) {
                    console.log(`Программа запустилась с массивом размера : ${amount.value}`)
                    console.log(`Программа будет повторять весь процесс еще : ${repeats.value - i} ${repeats.value > 1 ? "раза" : "раз"}`)
                    array = fillArray(parseInt(amount.value))
                    console.log(array)
                    let start_time = Date.now()
                    insertion_sort(array)
                    let end_time = Date.now()
                    amount_of_time = end_time - start_time

                    if (i >= 0) {
                        time_array.push(amount_of_time)
                    }

                }
                time_array.sort()
                min = `<div>Минимальное время : ${time_array[0]} мс.</div>`
                max = `<div>Максимальное время : ${time_array[time_array.length - 1]} мс.</div>`

                for (let i = 0; i < time_array.length - 1; i++) {
                    avg_time += time_array[i]
                }

                avg_time > 0 ? avg_time /= time_array.length : 0
                console.log(`Массив времени работы : ${time_array}`)
                result_exec.innerHTML += `\nСреднее время сортировки на этой машине : \t${avg_time} мс.`
                info.innerHTML += `${navigator.hardwareConcurrency} ядер использовано.` + "\n"
                result_exec2.innerHTML += `Количество операций: ${counter}`

                if (result_exec.innerHTML.length > 1) {
                    load_result.style.visibility = "visible"
                    result_exec.style.visibility = "visible"
                    find_num.style.visibility = "visible"
                    check.style.visibility = "visible"
                    result_exec2.style.visibility = "visible"
                    btn_download.addEventListener("click", () => {
                        download(array, "Назови_меня_пожалйста.txt", "text/plain")
                        save_result.style.visibility = "visible"
                    })
                }
                break;
            }
            case "selection_sort": {
                array = []
                alert()
                console.log(`Выбран алгоритм сортировки : ${algorithm.value}`)
                for (let i = 0; i < parseInt(repeats.value); i++) {
                    console.log(`Программа запустилась с массивом размера : ${amount.value}`)
                    console.log(`Программа будет повторять весь процесс еще : ${repeats.value - i} ${repeats.value > 1 ? "раза" : "раз"}`)
                    array = fillArray(parseInt(amount.value))
                    console.log(array)
                    let start_time = Date.now()
                    selection_sort(array)
                    let end_time = Date.now()
                    amount_of_time = end_time - start_time

                    if (i >= 0) {
                        time_array.push(amount_of_time)
                    }

                }
                time_array.sort()
                min = `<div>Минимальное время : ${time_array[0]} мс.</div>`
                max = `<div>Максимальное время : ${time_array[time_array.length - 1]} мс.</div>`

                for (let i = 0; i < time_array.length - 1; i++) {
                    avg_time += time_array[i]
                }

                avg_time > 0 ? avg_time /= time_array.length : 0
                console.log(`Массив времени работы : ${time_array}`)
                result_exec.innerHTML += `\nСреднее время сортировки на этой машине : \t${avg_time} мс.`
                info.innerHTML += `${navigator.hardwareConcurrency} ядер использовано.` + "\n"
                result_exec2.innerHTML += `Количество операций: ${counter}`

                if (result_exec.innerHTML.length > 1) {
                    load_result.style.visibility = "visible"
                    result_exec.style.visibility = "visible"
                    find_num.style.visibility = "visible"
                    check.style.visibility = "visible"
                    result_exec2.style.visibility = "visible"
                    btn_download.addEventListener("click", () => {
                        download(array, "Назови_меня_пожалйста.txt", "text/plain")
                        save_result.style.visibility = "visible"
                    })
                }
                break;
            }
            case "quick_sort": {
                counter = 0
                array = []
                alert()
                console.log(`Выбран алгоритм сортировки : ${algorithm.value}`)
                for (let i = 0; i < parseInt(repeats.value); i++) {
                    console.log(`Программа запустилась с массивом размера : ${amount.value}`)
                    console.log(`Программа будет повторять весь процесс еще : ${repeats.value - i} ${repeats.value > 1 ? "раза" : "раз"}`)
                    array = fillArray(parseInt(amount.value))
                    console.log(array)
                    let start_time = Date.now()
                    quick_sort(array, 0, array.length)
                    let end_time = Date.now()
                    amount_of_time = end_time - start_time

                    if (i >= 0) {
                        time_array.push(amount_of_time)
                    }

                }
                time_array.sort()
                min = `<div>Минимальное время : ${time_array[0]} мс.</div>`
                max = `<div>Максимальное время : ${time_array[time_array.length - 1]} мс.</div>`

                for (let i = 0; i < time_array.length - 1; i++) {
                    avg_time += time_array[i]
                }

                avg_time > 0 ? avg_time /= time_array.length : 0
                console.log(`Массив времени работы : ${time_array}`)
                result_exec.innerHTML += `\nСреднее время сортировки на этой машине : \t${avg_time} мс.`
                info.innerHTML += `${navigator.hardwareConcurrency} ядер использовано.` + "\n"
                result_exec2.innerHTML += `Количество операций: ${counter}`

                if (result_exec.innerHTML.length > 1) {
                    load_result.style.visibility = "visible"
                    result_exec.style.visibility = "visible"
                    find_num.style.visibility = "visible"
                    check.style.visibility = "visible"
                    result_exec2.style.visibility = "visible"
                    btn_download.addEventListener("click", () => {
                        download(array, "Назови_меня_пожалйста.txt", "text/plain")
                        save_result.style.visibility = "visible"
                    })
                }
                break;
            }
            case "merge_sort": {
                array = []
                alert()
                console.log(`Выбран алгоритм сортировки : ${algorithm.value}`)
                for (let i = 0; i < parseInt(repeats.value); i++) {
                    console.log(`Программа запустилась с массивом размера : ${amount.value}`)
                    console.log(`Программа будет повторять весь процесс еще : ${repeats.value - i} ${repeats.value > 1 ? "раза" : "раз"}`)
                    array = fillArray(parseInt(amount.value))
                    console.log(array)
                    let start_time = Date.now()
                    merge_sort(array, 0, array.length)
                    let end_time = Date.now()
                    amount_of_time = end_time - start_time

                    if (i >= 0) {
                        time_array.push(amount_of_time)
                    }

                }
                time_array.sort()
                min = `<div>Минимальное время : ${time_array[0]} мс.</div>`
                max = `<div>Максимальное время : ${time_array[time_array.length - 1]} мс.</div>`

                for (let i = 0; i < time_array.length - 1; i++) {
                    avg_time += time_array[i]
                }

                avg_time > 0 ? avg_time /= time_array.length : 0
                console.log(`Массив времени работы : ${time_array}`)
                result_exec.innerHTML += `\nСреднее время сортировки на этой машине : \t${avg_time} мс.`
                info.innerHTML += `${navigator.hardwareConcurrency} ядер использовано.` + "\n"
                result_exec2.innerHTML += `Количество операций: ${counter}`

                if (result_exec.innerHTML.length > 1) {
                    load_result.style.visibility = "visible"
                    result_exec.style.visibility = "visible"
                    find_num.style.visibility = "visible"
                    check.style.visibility = "visible"
                    result_exec2.style.visibility = "visible"
                    btn_download.addEventListener("click", () => {
                        download(array, "Назови_меня_пожалйста.txt", "text/plain")
                        save_result.style.visibility = "visible"
                    })
                }
                break;
            }
            // default : {
            //     alert("Ты ничего не выбрал!")
            //     break;
            // }
        }
    }
})

let amount_of_time = 0




function bubble_sort(array) {
    counter = 0
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
            counter++
        }
    }
    return array
}



function insertion_sort(array) {
    counter = 0
    for (let i = 0; i < array.length; i++) {
        let j = i - 1
        while (j > 0 && array[j] < array[j - 1]) {
            [array[j], array[j - 1]] = [array[j - 1], array[j]]
            j--
            counter++
        }
    }
    return array
}



function selection_sort(array) {
    counter = 0
    let indexOfMin = 0
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[indexOfMin]) {
                indexOfMin = j
            }
            counter++
        }
        let temp = array[i]
        array[i] = array[indexOfMin]
        array[indexOfMin] = temp 
    }
    console.log(`Количество итераций до полной сортировки = ${counter}`)
    return array
}



function partition(array, start, end) {
    const pivot_val = array[end]
    let index = start
    for (let i = start; i < end; i++) {
        if(array[i] < pivot_val){
        [array[i], array[index]] = [array[index], array[i]]
        index++;
        }
        counter++
    }
    [array[index], array[end]] = [array[end], array[index]]
    return index
}


function quick_sort(array, start, end) {
    if(start >= end){
        return;
    }
    let index = partition(array, start, end)
    quick_sort(array, start, index - 1)
    quick_sort(array, index + 1, end)
}



function merge_sort(array, left, right) {
    if(left >= right){
        return
    }

    let middle = left + parseInt((right - left) / 2)

    merge_sort(array, left, middle)
    merge_sort(array, middle + 1, right)

    merge(array, left, middle, right)

}

function merge(array, left, middle, right){
    let l1 = middle - left + 1
    let l2 = right - middle

    let arr1 = new Array(l1)
    let arr2 = new Array(l2)


    for(let i = 0; i < l1; ++i){
        arr1[i] = array[left + 1]
    }
    for(let i = 0; i < l2; ++i){
        arr2[i] = array[middle + 1 + i]
    }


    let i = 0, j = 0, k = left


    while(i < l1 && j < l2){
        if(arr1[i] < arr2[j]){
            array[k] = arr1[i]
            ++i
        }else{
            array[k] = arr2[j]
            j++
        }
        k++
    }

    while(i < l1){
        array[k] = arr1[i]
        i++
        k++
    }

    while(j < l2){
        array[k] = arr2[j]
        j++
        k++
    }
}


function binary_search_recursion(array, start, end, element) {
    console.log(`\nРекурсивно мы имеем след значения в массиве: 
    ${array};\n------------------------------------\nstart : ${start};\nend : ${end};\nelement : ${element}`);
    counter++;
    let middle = Math.floor((start + end) / 2)
    if(start + 1 >= end){
        console.log("Стартовый элемент дошел до конечного.")
        console.log(`Возможно(точно) искомого элемента : ${element} нет в массиве!`)
        console.log("Если вы считаете иначе, то проверьте сами!")
        return -1;
    }

    if(array[middle] === element){
        alert(`Элемент "${element}" найден!\nИндекс элемента : ${middle}`)
        console.log(`Счетчик зафиксировал ${counter} сравнений!`)
        return middle
    }
    else if(array[middle] > element){
        console.log("Левая часть массива используется...")
        console.log(`Новая позиция стартового элемента ${start};\nсередина ${middle}\nконец ${end}`)
        binary_search_recursion(array, start, middle, element)
    }else{
        console.log("Правая часть массива используется...")
        console.log(`Новая позиция стартового элемента ${start};\nсередина ${middle}\nконец ${end}`)
        binary_search_recursion(array, middle, end, element)
    }
    return middle
}

check.addEventListener("click",()=>{
    alert("Кнопка поиска нажата!")
    let element = parseInt(search_num.value)
    console.log(element)
    binary_search_recursion(array, 0, array.length, element)
})




function download(text, name, type) {
    let a = document.getElementById('save_file')
    let file = new Blob([text], { type: type })
    a.href = URL.createObjectURL(file)
    a.download = name
}