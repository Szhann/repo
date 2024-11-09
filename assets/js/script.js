function copyRepoUrl() {
    const repoUrl = document.getElementById('repoUrl').innerText;
    navigator.clipboard.writeText(repoUrl).then(() => {
        alert('源地址已复制到剪贴板！');
    }).catch(err => {
        console.error('复制失败:', err);
    });
} 