//===========================================================================
// MOG_TitleMagicCircle.js
// Translate to Japanese : munokura.tk
//===========================================================================

/*:
 * @plugindesc (v1.1 *) Adiciona círculos mágicos na tela de título.
 * @author Moghunter
 *
 * @param -> Magic Circle 1 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 *
 * @param Circle 1 Visible
 * @desc Ativar a imagem.
 * @default true
 * @type boolean
 * @parent -> Magic Circle 1 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 1 File Name
 * @desc Nome da imagem.
 * @default MCircle1
 * @parent -> Magic Circle 1 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 1 Z-Index
 * @desc Prioridade Z da camada.
 * @default 10
 * @parent -> Magic Circle 1 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 1 X-Axis
 * @desc Posição X-Axis da imagem.
 * @default 790
 * @parent -> Magic Circle 1 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 1 Y-Axis
 * @desc Posição Y-Axis da imagem.
 * @default 600
 * @parent -> Magic Circle 1 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 1 Rotation
 * @desc Velocidade da rotação.
 * @default 0.01
 * @parent -> Magic Circle 1 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 1 Blend Mode
 * @desc Definição de blend.
 * 0 - Normal    1- Add    2 - Substract
 * @default 1
 * @type select
 * @option Normal
 * @value 0
 * @option Add
 * @value 1
 * @option Substract
 * @value 2
 * @parent -> Magic Circle 1 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 1 Transition Time
 * @desc Tempo para apresentar a imagem.
 * @default 0
 * @parent -> Magic Circle 1 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 1 Pulse Mode
 * @desc Ativar animação de pulse.
 * 0 - Disabled   1 - Zoom In Out  2 - Zoom Out
 * @default 2
 * @type select
 * @option Disabled
 * @value 0
 * @option Zoom In Out
 * @value 1
 * @option Zoom Out
 * @value 2
 * @parent -> Magic Circle 1 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 *
 * @param -> Magic Circle 2 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 *
 * @param Circle 2 Visible
 * @desc Ativar a imagem.
 * @default true
 * @type boolean
 * @parent -> Magic Circle 2 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 2 File Name
 * @desc Nome da imagem.
 * @default MCircle2
 * @parent -> Magic Circle 2 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 2 Z-Index
 * @desc Prioridade Z da camada.
 * @default 11
 * @parent -> Magic Circle 2 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 2 X-Axis
 * @desc Posição X-Axis da imagem.
 * @default 790
 * @parent -> Magic Circle 2 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 2 Y-Axis
 * @desc Posição Y-Axis da imagem.
 * @default 600
 * @parent -> Magic Circle 2 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 2 Rotation
 * @desc Velocidade da rotação.
 * @default -0.01
 * @parent -> Magic Circle 2 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 2 Blend Mode
 * @desc Definição de blend.
 * 0 - Normal    1- Add    2 - Substract
 * @default 0
 * @type select
 * @option Normal
 * @value 0
 * @option Add
 * @value 1
 * @option Substract
 * @value 2
 * @parent -> Magic Circle 2 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 2 Transition Time
 * @desc Tempo para apresentar a imagem.
 * @default 0
 * @parent -> Magic Circle 2 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 2 Pulse Mode
 * @desc Ativar animação de pulse.
 * 0 - Disabled   1 - Zoom In Out  2 - Zoom Out
 * @default 0
 * @type select
 * @option Disabled
 * @value 0
 * @option Zoom In Out
 * @value 1
 * @option Zoom Out
 * @value 2
 * @parent -> Magic Circle 2 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 *
 * @param -> Magic Circle 3 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 *
 * @param Circle 3 Visible
 * @desc Ativar a imagem.
 * @default false
 * @type boolean
 * @parent -> Magic Circle 3 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 3 File Name
 * @desc Nome da imagem.
 * @default MCircle3
 * @parent -> Magic Circle 3 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 3 Z-Index
 * @desc Prioridade Z da camada.
 * @default 12
 * @parent -> Magic Circle 3 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 3 X-Axis
 * @desc Posição X-Axis da imagem.
 * @default 200
 * @parent -> Magic Circle 3 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 3 Y-Axis
 * @desc Posição Y-Axis da imagem.
 * @default 200
 * @parent -> Magic Circle 3 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 3 Rotation
 * @desc Velocidade da rotação.
 * @default 0.01
 * @parent -> Magic Circle 3 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 3 Blend Mode
 * @desc Definição de blend.
 * 0 - Normal    1- Add    2 - Substract
 * @default 1
 * @type select
 * @option Normal
 * @value 0
 * @option Add
 * @value 1
 * @option Substract
 * @value 2
 * @parent -> Magic Circle 3 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 3 Transition Time
 * @desc Tempo para apresentar a imagem.
 * @default 0
 * @parent -> Magic Circle 3 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 3 Pulse Mode
 * @desc Ativar animação de pulse.
 * 0 - Disabled   1 - Zoom In Out  2 - Zoom Out
 * @default 0
 * @type select
 * @option Disabled
 * @value 0
 * @option Zoom In Out
 * @value 1
 * @option Zoom Out
 * @value 2
 * @parent -> Magic Circle 3 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 *
 * @param -> Magic Circle 4 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 *
 * @param Circle 4 Visible
 * @desc Ativar a imagem.
 * @default false
 * @type boolean
 * @parent -> Magic Circle 4 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 4 File Name
 * @desc Nome da imagem.
 * @default MCircle4
 * @parent -> Magic Circle 4 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 4 Z-Index
 * @desc Prioridade Z da camada.
 * @default 13
 * @parent -> Magic Circle 4 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 4 X-Axis
 * @desc Posição X-Axis da imagem.
 * @default 300
 * @parent -> Magic Circle 4 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 4 Y-Axis
 * @desc Posição Y-Axis da imagem.
 * @default 300
 * @parent -> Magic Circle 4 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 4 Rotation
 * @desc Velocidade da rotação.
 * @default 0.01
 * @parent -> Magic Circle 4 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 4 Blend Mode
 * @desc Definição de blend.
 * 0 - Normal    1- Add    2 - Substract
 * @default 1
 * @type select
 * @option Normal
 * @value 0
 * @option Add
 * @value 1
 * @option Substract
 * @value 2
 * @parent -> Magic Circle 4 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 4 Transition Time
 * @desc Tempo para apresentar a imagem.
 * @default 0
 * @parent -> Magic Circle 4 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 4 Pulse Mode
 * @desc Ativar animação de pulse.
 * 0 - Disabled   1 - Zoom In Out  2 - Zoom Out
 * @default 0
 * @type select
 * @option Disabled
 * @value 0
 * @option Zoom In Out
 * @value 1
 * @option Zoom Out
 * @value 2
 * @parent -> Magic Circle 4 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 *
 * @param -> Magic Circle 5 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 *
 * @param Circle 5 Visible
 * @desc Ativar a imagem.
 * @default false
 * @type boolean
 * @parent -> Magic Circle 5 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 5 File Name
 * @desc Nome da imagem.
 * @default MCircle5
 * @parent -> Magic Circle 5 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 5 Z-Index
 * @desc Prioridade Z da camada.
 * @default 14
 * @parent -> Magic Circle 5 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 5 X-Axis
 * @desc Posição X-Axis da imagem.
 * @default 400
 * @parent -> Magic Circle 5 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 5 Y-Axis
 * @desc Posição Y-Axis da imagem.
 * @default 400
 * @parent -> Magic Circle 5 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 5 Rotation
 * @desc Velocidade da rotação.
 * @default 0.01
 * @parent -> Magic Circle 5 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 5 Blend Mode
 * @desc Definição de blend.
 * 0 - Normal    1- Add    2 - Substract
 * @default 1
 * @type select
 * @option Normal
 * @value 0
 * @option Add
 * @value 1
 * @option Substract
 * @value 2
 * @parent -> Magic Circle 5 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 5 Transition Time
 * @desc Tempo para apresentar a imagem.
 * @default 0
 * @parent -> Magic Circle 5 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 5 Pulse Mode
 * @desc Ativar animação de pulse.
 * 0 - Disabled   1 - Zoom In Out  2 - Zoom Out
 * @default 0
 * @type select
 * @option Disabled
 * @value 0
 * @option Zoom In Out
 * @value 1
 * @option Zoom Out
 * @value 2
 * @parent -> Magic Circle 5 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 *
 * @param -> Magic Circle 6 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 *
 * @param Circle 6 Visible
 * @desc Ativar a imagem.
 * @default false
 * @type boolean
 * @parent -> Magic Circle 6 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 6 File Name
 * @desc Nome da imagem.
 * @default MCircle6
 * @parent -> Magic Circle 6 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 6 Z-Index
 * @desc Prioridade Z da camada.
 * @default 15
 * @parent -> Magic Circle 6 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 6 X-Axis
 * @desc Posição X-Axis da imagem.
 * @default 500
 * @parent -> Magic Circle 6 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 6 Y-Axis
 * @desc Posição Y-Axis da imagem.
 * @default 500
 * @parent -> Magic Circle 6 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 6 Rotation
 * @desc Velocidade da rotação.
 * @default 0.01
 * @parent -> Magic Circle 6 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 6 Blend Mode
 * @desc Definição de blend.
 * 0 - Normal    1- Add    2 - Substract
 * @default 1
 * @type select
 * @option Normal
 * @value 0
 * @option Add
 * @value 1
 * @option Substract
 * @value 2
 * @parent -> Magic Circle 6 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 6 Transition Time
 * @desc Tempo para apresentar a imagem.
 * @default 0
 * @parent -> Magic Circle 6 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 6 Pulse Mode
 * @desc Ativar animação de pulse.
 * 0 - Disabled   1 - Zoom In Out  2 - Zoom Out
 * @default 0
 * @type select
 * @option Disabled
 * @value 0
 * @option Zoom In Out
 * @value 1
 * @option Zoom Out
 * @value 2
 * @parent -> Magic Circle 6 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 *
 * @param -> Magic Circle 7 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 *
 * @param Circle 7 Visible
 * @desc Ativar a imagem.
 * @default false
 * @type boolean
 * @parent -> Magic Circle 7 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 7 File Name
 * @desc Nome da imagem.
 * @default MCircle7
 * @parent -> Magic Circle 7 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 7 Z-Index
 * @desc Prioridade Z da camada.
 * @default 16
 * @parent -> Magic Circle 7 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 7 X-Axis
 * @desc Posição X-Axis da imagem.
 * @default 550
 * @parent -> Magic Circle 7 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 7 Y-Axis
 * @desc Posição Y-Axis da imagem.
 * @default 550
 * @parent -> Magic Circle 7 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 7 Rotation
 * @desc Velocidade da rotação.
 * @default 0.01
 * @parent -> Magic Circle 7 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 7 Blend Mode
 * @desc Definição de blend.
 * 0 - Normal    1- Add    2 - Substract
 * @default 1
 * @type select
 * @option Normal
 * @value 0
 * @option Add
 * @value 1
 * @option Substract
 * @value 2
 * @parent -> Magic Circle 7 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 7 Transition Time
 * @desc Tempo para apresentar a imagem.
 * @default 0
 * @parent -> Magic Circle 7 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 7 Pulse Mode
 * @desc Ativar animação de pulse.
 * 0 - Disabled   1 - Zoom In Out  2 - Zoom Out
 * @default 0
 * @type select
 * @option Disabled
 * @value 0
 * @option Zoom In Out
 * @value 1
 * @option Zoom Out
 * @value 2
 * @parent -> Magic Circle 7 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 *
 * @param -> Magic Circle 8 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 *
 * @param Circle 8 Visible
 * @desc Ativar a imagem.
 * @default false
 * @type boolean
 * @parent -> Magic Circle 8 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 8 File Name
 * @desc Nome da imagem.
 * @default MCircle8
 * @parent -> Magic Circle 8 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 8 Z-Index
 * @desc Prioridade Z da camada.
 * @default 17
 * @parent -> Magic Circle 8 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 8 X-Axis
 * @desc Posição X-Axis da imagem.
 * @default 600
 * @parent -> Magic Circle 8 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 8 Y-Axis
 * @desc Posição Y-Axis da imagem.
 * @default 600
 * @parent -> Magic Circle 8 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 8 Rotation
 * @desc Velocidade da rotação.
 * @default 0.01
 * @parent -> Magic Circle 8 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 8 Blend Mode
 * @desc Definição de blend.
 * 0 - Normal    1- Add    2 - Substract
 * @default 1
 * @type select
 * @option Normal
 * @value 0
 * @option Add
 * @value 1
 * @option Substract
 * @value 2
 * @parent -> Magic Circle 8 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 8 Transition Time
 * @desc Tempo para apresentar a imagem.
 * @default 0
 * @parent -> Magic Circle 8 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 8 Pulse Mode
 * @desc Ativar animação de pulse.
 * 0 - Disabled   1 - Zoom In Out  2 - Zoom Out
 * @default 0
 * @type select
 * @option Disabled
 * @value 0
 * @option Zoom In Out
 * @value 1
 * @option Zoom Out
 * @value 2
 * @parent -> Magic Circle 8 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 *
 * @param -> Magic Circle 9 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 *
 * @param Circle 9 Visible
 * @desc Ativar a imagem.
 * @default false
 * @type boolean
 * @parent -> Magic Circle 9 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 9 File Name
 * @desc Nome da imagem.
 * @default MCircle9
 * @parent -> Magic Circle 9 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 9 Z-Index
 * @desc Prioridade Z da camada.
 * @default 18
 * @parent -> Magic Circle 9 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 9 X-Axis
 * @desc Posição X-Axis da imagem.
 * @default 620
 * @parent -> Magic Circle 9 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 9 Y-Axis
 * @desc Posição Y-Axis da imagem.
 * @default 620
 * @parent -> Magic Circle 9 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 9 Rotation
 * @desc Velocidade da rotação.
 * @default 0.01
 * @parent -> Magic Circle 9 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 9 Blend Mode
 * @desc Definição de blend.
 * 0 - Normal    1- Add    2 - Substract
 * @default 1
 * @type select
 * @option Normal
 * @value 0
 * @option Add
 * @value 1
 * @option Substract
 * @value 2
 * @parent -> Magic Circle 9 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 9 Transition Time
 * @desc Tempo para apresentar a imagem.
 * @default 0
 * @parent -> Magic Circle 9 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 9 Pulse Mode
 * @desc Ativar animação de pulse.
 * 0 - Disabled   1 - Zoom In Out  2 - Zoom Out
 * @default 0
 * @type select
 * @option Disabled
 * @value 0
 * @option Zoom In Out
 * @value 1
 * @option Zoom Out
 * @value 2
 * @parent -> Magic Circle 9 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 *
 * @param -> Magic Circle 10 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 *
 * @param Circle 10 Visible
 * @desc Ativar a imagem.
 * @default false
 * @type boolean
 * @parent -> Magic Circle 10 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 10 File Name
 * @desc Nome da imagem.
 * @default MCircle10
 * @parent -> Magic Circle 10 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 10 Z-Index
 * @desc Prioridade Z da camada.
 * @default 19
 * @parent -> Magic Circle 10 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 10 X-Axis
 * @desc Posição X-Axis da imagem.
 * @default 650
 * @parent -> Magic Circle 10 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 10 Y-Axis
 * @desc Posição Y-Axis da imagem.
 * @default 600
 * @parent -> Magic Circle 10 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 10 Rotation
 * @desc Velocidade da rotação.
 * @default 0.01
 * @parent -> Magic Circle 10 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 10 Blend Mode
 * @desc Definição de blend.
 * 0 - Normal    1- Add    2 - Substract
 * @default 1
 * @type select
 * @option Normal
 * @value 0
 * @option Add
 * @value 1
 * @option Substract
 * @value 2
 * @parent -> Magic Circle 10 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 10 Transition Time
 * @desc Tempo para apresentar a imagem.
 * @default 0
 * @parent -> Magic Circle 10 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 10 Pulse Mode
 * @desc Ativar animação de pulse.
 * 0 - Disabled   1 - Zoom In Out  2 - Zoom Out
 * @default 0
 * @type select
 * @option Disabled
 * @value 0
 * @option Zoom In Out
 * @value 1
 * @option Zoom Out
 * @value 2
 * @parent -> Magic Circle 10 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @help
 * ===========================================================================
 * +++ MOG - Title Magic Circles (v1.0) +++
 * By Moghunter
 * https://atelierrgss.wordpress.com/
 * ===========================================================================
 * Adiciona círculos mágicos na tela de título.
 *
 * Grave as imagens na pasta.
 *
 * img/titles2/
 *
 * ===========================================================================
 * - WHAT'S  NEW (version 1.1)
 * ===========================================================================
 * - (NEW) - Plugins parameters compatíveis com RM1.5+
 */
/*:ja
 * @plugindesc (v1.1 *) タイトル画面に魔法陣アニメーションを追加します。
 * @author Moghunter
 * 
 * @param -> Magic Circle 1 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 * 
 * @param Circle 1 Visible
 * @desc 画像の有効設定
 * @default true
 * @type boolean
 * @parent -> Magic Circle 1 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 1 File Name
 * @desc 画像のファイル名
 * @default MCircle1
 * @parent -> Magic Circle 1 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 1 Z-Index
 * @desc レイヤーのZ優先順位
 * @default 10
 * @parent -> Magic Circle 1 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 1 X-Axis
 * @desc 画像のX軸位置
 * @default 790
 * @parent -> Magic Circle 1 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 1 Y-Axis
 * @desc 画像のY軸位置
 * @default 600
 * @parent -> Magic Circle 1 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 1 Rotation
 * @desc 回転速度
 * @default 0.01
 * @parent -> Magic Circle 1 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 1 Blend Mode
 * @desc ブレンドの方法
 * 0 - 通常    1- 加算    2 - 減算
 * @default 1
 * @type select
 * @option 通常
 * @value 0
 * @option 加算
 * @value 1
 * @option 減算
 * @value 2
 * @parent -> Magic Circle 1 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 1 Transition Time
 * @desc 画像の表示時間
 * @default 0
 * @parent -> Magic Circle 1 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 1 Pulse Mode
 * @desc パルスアニメーションの設定
 * 0 - 無効   1 - ズームイン・アウト  2 - ズームアウト
 * @default 2
 * @type select
 * @option 無効
 * @value 0
 * @option ズームイン・アウト
 * @value 1
 * @option ズームアウト
 * @value 2
 * @parent -> Magic Circle 1 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param
 * 
 * @param -> Magic Circle 2 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 * 
 * @param Circle 2 Visible
 * @desc 画像の有効設定
 * @default true
 * @type boolean
 * @parent -> Magic Circle 2 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 2 File Name
 * @desc 画像のファイル名
 * @default MCircle2
 * @parent -> Magic Circle 2 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 2 Z-Index
 * @desc レイヤーのZ優先順位
 * @default 11
 * @parent -> Magic Circle 2 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 2 X-Axis
 * @desc 画像のX軸位置
 * @default 790
 * @parent -> Magic Circle 2 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 2 Y-Axis
 * @desc 画像のY軸位置
 * @default 600
 * @parent -> Magic Circle 2 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 2 Rotation
 * @desc 回転速度
 * @default -0.01
 * @parent -> Magic Circle 2 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 2 Blend Mode
 * @desc ブレンドの方法
 * 0 - 通常    1- 加算    2 - 減算
 * @default 0
 * @type select
 * @option 通常
 * @value 0
 * @option 加算
 * @value 1
 * @option 減算
 * @value 2
 * @parent -> Magic Circle 2 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 2 Transition Time
 * @desc 画像の表示時間
 * @default 0
 * @parent -> Magic Circle 2 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 2 Pulse Mode
 * @desc パルスアニメーションの設定
 * 0 - 無効   1 - ズームイン・アウト  2 - ズームアウト
 * @default 0
 * @type select
 * @option 無効
 * @value 0
 * @option ズームイン・アウト
 * @value 1
 * @option ズームアウト
 * @value 2
 * @parent -> Magic Circle 2 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param
 * 
 * @param -> Magic Circle 3 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 * 
 * @param Circle 3 Visible
 * @desc 画像の有効設定
 * @default false
 * @type boolean
 * @parent -> Magic Circle 3 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 3 File Name
 * @desc 画像のファイル名
 * @default MCircle3
 * @parent -> Magic Circle 3 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 3 Z-Index
 * @desc レイヤーのZ優先順位
 * @default 12
 * @parent -> Magic Circle 3 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 3 X-Axis
 * @desc 画像のX軸位置
 * @default 200
 * @parent -> Magic Circle 3 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 3 Y-Axis
 * @desc 画像のY軸位置
 * @default 200
 * @parent -> Magic Circle 3 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 3 Rotation
 * @desc 回転速度
 * @default 0.01
 * @parent -> Magic Circle 3 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 3 Blend Mode
 * @desc ブレンドの方法
 * 0 - 通常    1- 加算    2 - 減算
 * @default 1
 * @type select
 * @option 通常
 * @value 0
 * @option 加算
 * @value 1
 * @option 減算
 * @value 2
 * @parent -> Magic Circle 3 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 3 Transition Time
 * @desc 画像の表示時間
 * @default 0
 * @parent -> Magic Circle 3 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 3 Pulse Mode
 * @desc パルスアニメーションの設定
 * 0 - 無効   1 - ズームイン・アウト  2 - ズームアウト
 * @default 0
 * @type select
 * @option 無効
 * @value 0
 * @option ズームイン・アウト
 * @value 1
 * @option ズームアウト
 * @value 2
 * @parent -> Magic Circle 3 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param
 * 
 * @param -> Magic Circle 4 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 * 
 * @param Circle 4 Visible
 * @desc 画像の有効設定
 * @default false
 * @type boolean
 * @parent -> Magic Circle 4 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 4 File Name
 * @desc 画像のファイル名
 * @default MCircle4
 * @parent -> Magic Circle 4 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 4 Z-Index
 * @desc レイヤーのZ優先順位
 * @default 13
 * @parent -> Magic Circle 4 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 4 X-Axis
 * @desc 画像のX軸位置
 * @default 300
 * @parent -> Magic Circle 4 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 4 Y-Axis
 * @desc 画像のY軸位置
 * @default 300
 * @parent -> Magic Circle 4 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 4 Rotation
 * @desc 回転速度
 * @default 0.01
 * @parent -> Magic Circle 4 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 4 Blend Mode
 * @desc ブレンドの方法
 * 0 - 通常    1- 加算    2 - 減算
 * @default 1
 * @type select
 * @option 通常
 * @value 0
 * @option 加算
 * @value 1
 * @option 減算
 * @value 2
 * @parent -> Magic Circle 4 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 4 Transition Time
 * @desc 画像の表示時間
 * @default 0
 * @parent -> Magic Circle 4 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 4 Pulse Mode
 * @desc パルスアニメーションの設定
 * 0 - 無効   1 - ズームイン・アウト  2 - ズームアウト
 * @default 0
 * @type select
 * @option 無効
 * @value 0
 * @option ズームイン・アウト
 * @value 1
 * @option ズームアウト
 * @value 2
 * @parent -> Magic Circle 4 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param
 * 
 * @param -> Magic Circle 5 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 * 
 * @param Circle 5 Visible
 * @desc 画像の有効設定
 * @default false
 * @type boolean
 * @parent -> Magic Circle 5 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 5 File Name
 * @desc 画像のファイル名
 * @default MCircle5
 * @parent -> Magic Circle 5 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 5 Z-Index
 * @desc レイヤーのZ優先順位
 * @default 14
 * @parent -> Magic Circle 5 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 5 X-Axis
 * @desc 画像のX軸位置
 * @default 400
 * @parent -> Magic Circle 5 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 5 Y-Axis
 * @desc 画像のY軸位置
 * @default 400
 * @parent -> Magic Circle 5 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 5 Rotation
 * @desc 回転速度
 * @default 0.01
 * @parent -> Magic Circle 5 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 5 Blend Mode
 * @desc ブレンドの方法
 * 0 - 通常    1- 加算    2 - 減算
 * @default 1
 * @type select
 * @option 通常
 * @value 0
 * @option 加算
 * @value 1
 * @option 減算
 * @value 2
 * @parent -> Magic Circle 5 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 5 Transition Time
 * @desc 画像の表示時間
 * @default 0
 * @parent -> Magic Circle 5 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 5 Pulse Mode
 * @desc パルスアニメーションの設定
 * 0 - 無効   1 - ズームイン・アウト  2 - ズームアウト
 * @default 0
 * @type select
 * @option 無効
 * @value 0
 * @option ズームイン・アウト
 * @value 1
 * @option ズームアウト
 * @value 2
 * @parent -> Magic Circle 5 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param
 * 
 * @param -> Magic Circle 6 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 * 
 * @param Circle 6 Visible
 * @desc 画像の有効設定
 * @default false
 * @type boolean
 * @parent -> Magic Circle 6 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 6 File Name
 * @desc 画像のファイル名
 * @default MCircle6
 * @parent -> Magic Circle 6 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 6 Z-Index
 * @desc レイヤーのZ優先順位
 * @default 15
 * @parent -> Magic Circle 6 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 6 X-Axis
 * @desc 画像のX軸位置
 * @default 500
 * @parent -> Magic Circle 6 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 6 Y-Axis
 * @desc 画像のY軸位置
 * @default 500
 * @parent -> Magic Circle 6 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 6 Rotation
 * @desc 回転速度
 * @default 0.01
 * @parent -> Magic Circle 6 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 6 Blend Mode
 * @desc ブレンドの方法
 * 0 - 通常    1- 加算    2 - 減算
 * @default 1
 * @type select
 * @option 通常
 * @value 0
 * @option 加算
 * @value 1
 * @option 減算
 * @value 2
 * @parent -> Magic Circle 6 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 6 Transition Time
 * @desc 画像の表示時間
 * @default 0
 * @parent -> Magic Circle 6 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 6 Pulse Mode
 * @desc パルスアニメーションの設定
 * 0 - 無効   1 - ズームイン・アウト  2 - ズームアウト
 * @default 0
 * @type select
 * @option 無効
 * @value 0
 * @option ズームイン・アウト
 * @value 1
 * @option ズームアウト
 * @value 2
 * @parent -> Magic Circle 6 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param
 * 
 * @param -> Magic Circle 7 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 * 
 * @param Circle 7 Visible
 * @desc 画像の有効設定
 * @default false
 * @type boolean
 * @parent -> Magic Circle 7 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 7 File Name
 * @desc 画像のファイル名
 * @default MCircle7
 * @parent -> Magic Circle 7 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 7 Z-Index
 * @desc レイヤーのZ優先順位
 * @default 16
 * @parent -> Magic Circle 7 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 7 X-Axis
 * @desc 画像のX軸位置
 * @default 550
 * @parent -> Magic Circle 7 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 7 Y-Axis
 * @desc 画像のY軸位置
 * @default 550
 * @parent -> Magic Circle 7 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 7 Rotation
 * @desc 回転速度
 * @default 0.01
 * @parent -> Magic Circle 7 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 7 Blend Mode
 * @desc ブレンドの方法
 * 0 - 通常    1- 加算    2 - 減算
 * @default 1
 * @type select
 * @option 通常
 * @value 0
 * @option 加算
 * @value 1
 * @option 減算
 * @value 2
 * @parent -> Magic Circle 7 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 7 Transition Time
 * @desc 画像の表示時間
 * @default 0
 * @parent -> Magic Circle 7 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 7 Pulse Mode
 * @desc パルスアニメーションの設定
 * 0 - 無効   1 - ズームイン・アウト  2 - ズームアウト
 * @default 0
 * @type select
 * @option 無効
 * @value 0
 * @option ズームイン・アウト
 * @value 1
 * @option ズームアウト
 * @value 2
 * @parent -> Magic Circle 7 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param
 * 
 * @param -> Magic Circle 8 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 * 
 * @param Circle 8 Visible
 * @desc 画像の有効設定
 * @default false
 * @type boolean
 * @parent -> Magic Circle 8 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 8 File Name
 * @desc 画像のファイル名
 * @default MCircle8
 * @parent -> Magic Circle 8 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 8 Z-Index
 * @desc レイヤーのZ優先順位
 * @default 17
 * @parent -> Magic Circle 8 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 8 X-Axis
 * @desc 画像のX軸位置
 * @default 600
 * @parent -> Magic Circle 8 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 8 Y-Axis
 * @desc 画像のY軸位置
 * @default 600
 * @parent -> Magic Circle 8 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 8 Rotation
 * @desc 回転速度
 * @default 0.01
 * @parent -> Magic Circle 8 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 8 Blend Mode
 * @desc ブレンドの方法
 * 0 - 通常    1- 加算    2 - 減算
 * @default 1
 * @type select
 * @option 通常
 * @value 0
 * @option 加算
 * @value 1
 * @option 減算
 * @value 2
 * @parent -> Magic Circle 8 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 8 Transition Time
 * @desc 画像の表示時間
 * @default 0
 * @parent -> Magic Circle 8 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 8 Pulse Mode
 * @desc パルスアニメーションの設定
 * 0 - 無効   1 - ズームイン・アウト  2 - ズームアウト
 * @default 0
 * @type select
 * @option 無効
 * @value 0
 * @option ズームイン・アウト
 * @value 1
 * @option ズームアウト
 * @value 2
 * @parent -> Magic Circle 8 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param
 * 
 * @param -> Magic Circle 9 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 * 
 * @param Circle 9 Visible
 * @desc 画像の有効設定
 * @default false
 * @type boolean
 * @parent -> Magic Circle 9 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 9 File Name
 * @desc 画像のファイル名
 * @default MCircle9
 * @parent -> Magic Circle 9 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 9 Z-Index
 * @desc レイヤーのZ優先順位
 * @default 18
 * @parent -> Magic Circle 9 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 9 X-Axis
 * @desc 画像のX軸位置
 * @default 620
 * @parent -> Magic Circle 9 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 9 Y-Axis
 * @desc 画像のY軸位置
 * @default 620
 * @parent -> Magic Circle 9 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 9 Rotation
 * @desc 回転速度
 * @default 0.01
 * @parent -> Magic Circle 9 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 9 Blend Mode
 * @desc ブレンドの方法
 * 0 - 通常    1- 加算    2 - 減算
 * @default 1
 * @type select
 * @option 通常
 * @value 0
 * @option 加算
 * @value 1
 * @option 減算
 * @value 2
 * @parent -> Magic Circle 9 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 9 Transition Time
 * @desc 画像の表示時間
 * @default 0
 * @parent -> Magic Circle 9 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 9 Pulse Mode
 * @desc パルスアニメーションの設定
 * 0 - 無効   1 - ズームイン・アウト  2 - ズームアウト
 * @default 0
 * @type select
 * @option 無効
 * @value 0
 * @option ズームイン・アウト
 * @value 1
 * @option ズームアウト
 * @value 2
 * @parent -> Magic Circle 9 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param
 * 
 * @param -> Magic Circle 10 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 * 
 * @param Circle 10 Visible
 * @desc 画像の有効設定
 * @default false
 * @type boolean
 * @parent -> Magic Circle 10 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 10 File Name
 * @desc 画像のファイル名
 * @default MCircle10
 * @parent -> Magic Circle 10 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 10 Z-Index
 * @desc レイヤーのZ優先順位
 * @default 19
 * @parent -> Magic Circle 10 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 10 X-Axis
 * @desc 画像のX軸位置
 * @default 650
 * @parent -> Magic Circle 10 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 10 Y-Axis
 * @desc 画像のY軸位置
 * @default 600
 * @parent -> Magic Circle 10 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 10 Rotation
 * @desc 回転速度
 * @default 0.01
 * @parent -> Magic Circle 10 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 10 Blend Mode
 * @desc ブレンドの方法
 * 0 - 通常    1- 加算    2 - 減算
 * @default 1
 * @type select
 * @option 通常
 * @value 0
 * @option 加算
 * @value 1
 * @option 減算
 * @value 2
 * @parent -> Magic Circle 10 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 10 Transition Time
 * @desc 画像の表示時間
 * @default 0
 * @parent -> Magic Circle 10 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Circle 10 Pulse Mode
 * @desc パルスアニメーションの設定
 * 0 - 無効   1 - ズームイン・アウト  2 - ズームアウト
 * @default 0
 * @type select
 * @option 無効
 * @value 0
 * @option ズームイン・アウト
 * @value 1
 * @option ズームアウト
 * @value 2
 * @parent -> Magic Circle 10 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @help
 * 翻訳:ムノクラ
 * https://munokura.tk/
 * https://twitter.com/munokura/
 * 
 * ===========================================================================
 * +++ MOG - Title Magic Circles (v1.0) +++
 * By Moghunter
 * https://atelierrgss.wordpress.com/
 * ===========================================================================
 * タイトル画面に魔法陣アニメーションを追加します。
 * 
 * 下記フォルダに画像を保存してください。
 * 
 * img/titles2/
 * 
 * ===========================================================================
 * - WHAT'S  NEW (version 1.1)
 * ===========================================================================
 * - (NEW) - RM1.5 +と互換性のあるプラグインパラメータ
 */

//===========================================================================
// ** PLUGIN PARAMETERS
//===========================================================================
    var Imported = Imported || {};
    Imported.MOG_TitleMagicCircles = true;
    var Moghunter = Moghunter || {};

    Moghunter.parameters = PluginManager.parameters('MOG_TitleMagicCircles');
    Moghunter.titleMcircles_M = 10
	Moghunter.titleMcircles_V = [];	Moghunter.titleMcircles_N = [];
	Moghunter.titleMcircles_X = [];	Moghunter.titleMcircles_Y = [];
	Moghunter.titleMcircles_R = [];	Moghunter.titleMcircles_T = [];
	Moghunter.titleMcircles_P = []; Moghunter.titleMcircles_Z = [];
	Moghunter.titleMcircles_B = [];
	for (var i = 0; i < Moghunter.titleMcircles_M; i++) {
		Moghunter.titleMcircles_V[i] = String(Moghunter.parameters['Circle ' + String(i + 1) + " Visible"] || "true");
		Moghunter.titleMcircles_N[i] = String(Moghunter.parameters['Circle ' + String(i + 1) + " File Name"] || "Magic_Circle");
		Moghunter.titleMcircles_X[i] = Number(Moghunter.parameters['Circle ' + String(i + 1) + " X-Axis"] || 0);
		Moghunter.titleMcircles_Y[i] = Number(Moghunter.parameters['Circle ' + String(i + 1) + " Y-Axis"] || 0);
		Moghunter.titleMcircles_Z[i] = Number(Moghunter.parameters['Circle ' + String(i + 1) + " Z-Index"] || 10);
		Moghunter.titleMcircles_R[i] = Number(Moghunter.parameters['Circle ' + String(i + 1) + " Rotation"] || 0.01);
		Moghunter.titleMcircles_T[i] = Number(Moghunter.parameters['Circle ' + String(i + 1) + " Transition Time"] || 60);
		Moghunter.titleMcircles_P[i] = Number(Moghunter.parameters['Circle ' + String(i + 1) + " Pulse Mode"] || 0);
		Moghunter.titleMcircles_B[i] = Number(Moghunter.parameters['Circle ' + String(i + 1) + " Blend Mode"] || 1);
	};

//===========================================================================
// ** Scene Title
//===========================================================================

//==============================
// * Create
//==============================
var _mog_mcirclestitles_create = Scene_Title.prototype.create;
Scene_Title.prototype.create = function() {
	_mog_mcirclestitles_create.call(this);
	if (this._titleField) {this._titleField.children.sort(function(a, b){return a.zIndex-b.zIndex})}
};

//==============================
// * Create Background
//==============================
var _mog_mcirclestitles_createBackground = Scene_Title.prototype.createBackground;
Scene_Title.prototype.createBackground = function() {
    _mog_mcirclestitles_createBackground.call(this);
	if (!this._titleField) {this.createTitleField()};
};

//==============================
// * Create Title Field
//==============================
Scene_Title.prototype.createTitleField = function() {
    this._titleField = new Sprite();
	this.addChild(this._titleField);
};

//==============================
// * Create Background
//==============================
var _mog_mcirclestitles_createForeground = Scene_Title.prototype.createForeground;
Scene_Title.prototype.createForeground = function() {
	this.createMcircles();
    _mog_mcirclestitles_createForeground.call(this);
};

//==============================
// * Create M Circles
//==============================
Scene_Title.prototype.createMcircles = function() {
	if (!this._titleField) {this.createTitleField()};
	this._mcircles = [];
    for (var i = 0; i < Moghunter.titleMcircles_M; i++) {
      this._mcircles[i] = new TitleMCircles(i);
	  this._mcircles[i].zIndex = Moghunter.titleMcircles_Z[i];
	  this._titleField.addChild(this._mcircles[i]);
    };
};

//===========================================================================
// ** Title Magic Circle
//===========================================================================
function TitleMCircles() {
    this.initialize.apply(this, arguments);
};

TitleMCircles.prototype = Object.create(Sprite.prototype);
TitleMCircles.prototype.constructor = TitleMCircles;

//==============================
// * Initialize
//==============================
TitleMCircles.prototype.initialize = function(index) {
    Sprite.prototype.initialize.call(this);
	this._index = index;
	this._enabled = String(Moghunter.titleMcircles_V[this._index]) === "true" ? true : false;
    if (this._enabled) {this.create_mcircles()};
};

//==============================
// * Create M circles
//==============================
TitleMCircles.prototype.create_mcircles = function() {
	this.bitmap = ImageManager.loadTitle2(String(Moghunter.titleMcircles_N[this._index]));
	this.anchor.x = 0.5;
	this.anchor.y = 0.5;
	this.x = Number(Moghunter.titleMcircles_X[this._index]);
	this.y = Number(Moghunter.titleMcircles_Y[this._index]);
	this.r = Number(Moghunter.titleMcircles_R[this._index]);
	this.t = Number(Moghunter.titleMcircles_T[this._index]);
	this.p = [Number(Moghunter.titleMcircles_P[this._index]),0,0];
	this.blendMode = Number(Moghunter.titleMcircles_B[this._index]);
	this.opacity = this.t > 0 && this.p[0] < 2? 0 : 255;
};

//==============================
// * Update Mcircle Pulse
//==============================
TitleMCircles.prototype.updateMcirclePulse = function() {
	if (this.p[0] === 1) {
	    this.updateMcirclePulseM1();
	} else {0
	    this.updateMcirclePulseM2();
	};
	this.scale.y = this.scale.x;
};

//==============================
// * Update Mcircle Pulse M1
//==============================
TitleMCircles.prototype.updateMcirclePulseM1 = function() {
	this.p[1]++;
	if (this.p[1] < 90) {
	    this.scale.x += 0.002;
	} else if (this.p[1] < 180) {
		this.scale.x -= 0.002;
	} else {
		this.p[1] = 0;
		this.scale.x = 1.00;
	};
};

//==============================
// * Update Mcircle Pulse M2
//==============================
TitleMCircles.prototype.updateMcirclePulseM2 = function() {
	this.scale.x += 0.003;
	if (this.p[1] === 0) {
		this.opacity += 4;
		if (this.opacity >= 255) {this.p[1] = 1};
	} else {
	    this.opacity -= 2;
	};
    if (this.opacity <= 0) {
		this.p[1] = 0;
		this.scale.x = 1.00;
		this.opacity = 0;
	};
};

//==============================
// * Update M Circles
//==============================
TitleMCircles.prototype.update_magic_circle = function() {
	this.rotation += this.r;
	if (this.t > 0) {
		this.t--;
	} else {
	if (this.p[0] < 2) {this.opacity += 2};
	};
	if (this.p[0] > 0) {this.updateMcirclePulse()};
};

//==============================
// * Update
//==============================
TitleMCircles.prototype.update = function() {
    Sprite.prototype.update.call(this);
	if (this._enabled) {this.update_magic_circle()};
};