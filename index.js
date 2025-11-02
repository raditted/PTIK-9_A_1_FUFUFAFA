window.onload = function () {
    const params = new URLSearchParams(window.location.search);

    const nama = params.get('nama');
    const email = params.get('email');
    const telp = params.get('telp');
    const ttl = params.get('ttl');
    const jk = params.get('jk');
    const alamat = params.get('alamat');
    const pendidikanSMA = params.get('pendidikan_sma');
    const pendidikanPT = params.get('pendidikan_pt');
    const skillsText = params.get('skills'); 
    const experienceText = params.get('experience'); 

    document.getElementById('cv-nama').textContent = nama || 'Data Tidak Ditemukan isi Formnya dulu yaaaaaaa';
    document.getElementById('cv-email').textContent = email || '-';
    document.getElementById('cv-telp').textContent = telp || '-';
    document.getElementById('cv-ttl').textContent = ttl || '-';
    document.getElementById('cv-jk').textContent = jk || '-';
    document.getElementById('cv-alamat').textContent = alamat || '-';

    const smaEl = document.getElementById('cv-pendidikan-sma');
    const ptEl = document.getElementById('cv-pendidikan-pt');

    smaEl.textContent = pendidikanSMA || '-';
    ptEl.textContent = pendidikanPT || '-';

    const skillsListElement = document.getElementById('cv-skills');
    if (skillsText) {
        const skillsArray = skillsText.split(','); 

        skillsArray.forEach(skill => {
            const li = document.createElement('li');
            li.innerText = skill.trim();
            skillsListElement.appendChild(li);
        });
    } else {
        const li = document.createElement('li');
        li.innerText = '-';
        skillsListElement.appendChild(li);
    }

    const expListElement = document.getElementById('cv-experience');
    if (experienceText) {
        const expArray = experienceText.split(',');
        expArray.forEach(item => {
            const li = document.createElement('li');
            li.innerText = item.trim();
            expListElement.appendChild(li);
        });
    } else {
        const li = document.createElement('li');
        li.innerText = '-';
        expListElement.appendChild(li);
    }
};