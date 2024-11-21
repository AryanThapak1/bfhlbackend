exports.sendData=async(req,res)=>{
    const isPrime = (n) => {
        if (n <= 1) return false;
        for (let i = 2; i * i <= n; i++) {
            if (n % i === 0) return false;
        }
        return true;
    };

    try {
        const { data, file_b64 } = req.body;
        
        const userId = "aryan_thapak_12012004";
        const email = "aryanthapak8@gmail.com";
        const rollNumber = "0827CS211046";

        const numbers = data.filter(item => !isNaN(item));
        const alphabets = data.filter(item => isNaN(item));
        const lowercaseAlphabets = alphabets.filter(item => item >= 'a' && item <= 'z');
        const highestLowercaseAlphabet = lowercaseAlphabets.length > 0 ? [lowercaseAlphabets.sort().pop()] : [];

        const isPrimeFound = numbers.some(num => isPrime(Number(num)));

        let fileValid = false;
        let fileMimeType = null;
        let fileSizeKb = null;

        if (file_b64) {
            try {
                const fileBuffer = Buffer.from(file_b64, 'base64');
                fileSizeKb = fileBuffer.length / 1024;

                fileMimeType = fileBuffer.toString('hex', 0, 4) === '89504e47' ? 'image/png' : 'doc/pdf';
                fileValid = true;
            } catch (e) {
                fileValid = false;
            }
        }

        const response = {
            "is_success": true,
            "user_id": userId,
            "email": email,
            "roll_number": rollNumber,
            "numbers": numbers,
            "alphabets": alphabets,
            "highest_lowercase_alphabet": highestLowercaseAlphabet,
            "is_prime_found": isPrimeFound,
            "file_valid": fileValid,
            "file_mime_type": fileMimeType,
            "file_size_kb": fileSizeKb
        };

        res.status(200).json(response);
    } catch (e) {
        res.status(400).json({ "is_success": false, "error": e.toString() });
    }
}

exports.sendOperationCode=async(req,res,next)=>{
    res.status(200).json({
        operation_code:1
    })

    next();
}