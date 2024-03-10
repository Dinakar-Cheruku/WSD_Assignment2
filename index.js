function count() {
    var text = document.getElementById("text").value.toLowerCase();
    const vowels = "aeiou";
    let vc = 0;
    let cc = 0;

    for (var i=0; i<text.length; i++){
        if(vowels.includes(text[i])) vc++;
        else if(text[i]==" ") continue;
        else cc++;

    }
    const result = document.getElementById("result1");
    result.innerHTML = "vowels = "+vc+" ,consonents = "+cc;
}

function palindrome() {
    const numinput = document.getElementById("number").value;
    const num = numinput.toString();
    const rev = num.split('').reverse().join('');
    if (num == rev){
        document.getElementById("result2").innerHTML="<p>Yes!, the given number is a palindrome.</p>";
    }
    else {
        document.getElementById("result2").innerHTML="<p>NO!, the given number is not a palindrome. try again.</p>";
    }
}

function calcTotal() {
    const subtotal = parseFloat(document.getElementById("subtotal").value);
    const tipPercentage = parseFloat(document.getElementById("tipPercentage").value);

    if (isNaN(subtotal) || isNaN(tipPercentage)) {
        document.getElementById("result3").innerHTML = "<p>Please enter valid numbers.</p>";
        return;
    }

    const tipAmount = subtotal * (tipPercentage / 100);
    const totalAmount = subtotal + tipAmount;

    document.getElementById("result3").innerHTML = `
        <p>Tip Amount: $${tipAmount.toFixed(2)}</p>
        <p>Total Amount to be Paid: $${totalAmount.toFixed(2)}</p>`;
}