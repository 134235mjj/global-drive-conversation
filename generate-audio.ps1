$ErrorActionPreference = 'Stop'
$items = Get-Content -LiteralPath "$PSScriptRoot/audio-scripts.json" -Raw | ConvertFrom-Json
$folder = Join-Path $PSScriptRoot 'audio'
New-Item -ItemType Directory -Path $folder -Force | Out-Null
$voice = New-Object -ComObject SAPI.SpVoice
$voice.Voice = $voice.GetVoices('Language=409').Item(0)
$voice.Rate = -1
foreach ($item in $items) {
    $stream = New-Object -ComObject SAPI.SpFileStream
    $stream.Open((Join-Path $folder $item.file), 3, $false)
    $voice.AudioOutputStream = $stream
    [void]$voice.Speak($item.text)
    $stream.Close()
}
Write-Output "Generated $($items.Count) local standard-English teaching recordings."
