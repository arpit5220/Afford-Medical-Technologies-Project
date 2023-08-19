async function getauthToken() {
    const authData = await fetch("http://20.244.56.144/train/auth", {
        method: 'POST',
        body: JSON.stringify(
            {
                "companyName": "Railway Indian",
                "clientID": "aa72c05a-4522-4de6-8271-bbbf1296f31d",
                "clientSecret": "sHZzzaAnhQFNuiUg",
                "ownerName": "Saurabh Srivastava",
                "ownerEmail": "Saurabh.20B0131057@abes.ac.in",
                "rollNo": "2000320130149"
            })
    })
    const thisData = await authData.json()
    return thisData;
}

module.exports={getauthToken}