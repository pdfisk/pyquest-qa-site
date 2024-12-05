ace.define("ace/mode/zig_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t,n){"use strict";var r=e("../lib/oop"),i=e("./text_highlight_rules").TextHighlightRules,s=function(){this.$rules={start:[{include:"#dummy_main"}],"#block":[{token:["storage.type.zig","text","punctuation.section.braces.begin.zig"],regex:/((?:[a-zA-Z_][\w.]*|@\".+\")?)(\s*)(\{)/,push:[{token:"punctuation.section.braces.end.zig",regex:/\}/,next:"pop"},{include:"#dummy_main"}]}],"#character_escapes":[{token:"constant.character.escape.newline.zig",regex:/\\n/},{token:"constant.character.escape.carrigereturn.zig",regex:/\\r/},{token:"constant.character.escape.tabulator.zig",regex:/\\t/},{token:"constant.character.escape.backslash.zig",regex:/\\\\/},{token:"constant.character.escape.single-quote.zig",regex:/\\'/},{token:"constant.character.escape.double-quote.zig",regex:/\\\"/},{token:"constant.character.escape.hexidecimal.zig",regex:/\\x[a-fA-F\d]{2}/},{token:"constant.character.escape.hexidecimal.zig",regex:/\\u\{[a-fA-F\d]{1,6}\}/}],"#comments":[{token:"comment.line.documentation.zig",regex:/\/\/[!\/](?=[^\/])/,push:[{token:"comment.line.documentation.zig",regex:/$/,next:"pop"},{include:"#commentContents"},{defaultToken:"comment.line.documentation.zig"}]},{token:"comment.line.double-slash.zig",regex:/\/\//,push:[{token:"comment.line.double-slash.zig",regex:/$/,next:"pop"},{include:"#commentContents"},{defaultToken:"comment.line.double-slash.zig"}]}],"#commentContents":[{token:"keyword.todo.zig",regex:/\b(?:TODO|FIXME|XXX|NOTE)\b:?/}],"#constants":[{token:"constant.language.zig",regex:/\b(?:null|undefined|true|false)\b/},{token:"constant.numeric.integer.zig",regex:/\b(?!\.)-?[\d_]+(?!\.)\b/},{token:"constant.numeric.integer.hexadecimal.zig",regex:/\b(?!\.)0x[a-fA-F\d_]+(?!\.)\b/},{token:"constant.numeric.integer.octal.zig",regex:/\b(?!\.)0o[0-7_]+(?!\.)\b/},{token:"constant.numeric.integer.binary.zig",regex:/\b(?!\.)0b[01_]+(?!\.)\b/},{token:"constant.numeric.float.zig",regex:/(?!\.)-?\b[\d_]+(?:\.[\d_]+)?(?:[eE][+-]?[\d_]+)?(?!\.)\b/},{token:"constant.numeric.float.hexadecimal.zig",regex:/(?!\.)-?\b0x[a-fA-F\d_]+(?:\.[a-fA-F\d_]+)?[pP]?(?:[+-]?[\d_]+)?(?!\.)\b/}],"#container_decl":[{token:"entity.name.union.zig",regex:/\b(?!\d)(?:[a-zA-Z_]\w*|@\".+\")?(?=\s*=\s*(?:extern|packed)?\b\s*union\s*[(\{])/},{token:"entity.name.struct.zig",regex:/\b(?!\d)(?:[a-zA-Z_]\w*|@\".+\")?(?=\s*=\s*(?:extern|packed)?\b\s*struct\s*[(\{])/},{token:"entity.name.enum.zig",regex:/\b(?!\d)(?:[a-zA-Z_]\w*|@\".+\")?(?=\s*=\s*(?:extern|packed)?\b\s*enum\s*[(\{])/},{token:"entity.name.error.zig",regex:/\b(?!\d)(?:[a-zA-Z_]\w*|@\".+\")?(?=\s*=\s*error\s*[(\{])/},{token:["storage.type.error.zig","punctuation.accessor.zig","entity.name.error.zig"],regex:/\b(error)(\.)([a-zA-Z_]\w*|@\".+\")/}],"#dummy_main":[{include:"#label"},{include:"#function_type"},{include:"#function_def"},{include:"#punctuation"},{include:"#storage_modifier"},{include:"#container_decl"},{include:"#constants"},{include:"#comments"},{include:"#strings"},{include:"#storage"},{include:"#keywords"},{include:"#operators"},{include:"#support"},{include:"#field_decl"},{include:"#block"},{include:"#function_call"},{include:"#enum_literal"},{include:"#variables"}],"#enum_literal":[{token:"constant.language.enum",regex:/(?!\w|\)|\?|\}|\]|\*|\.)\.(?:[a-zA-Z_]\w*\b|@\"[^\"]*\")(?!\(|\s*=[^=>])/}],"#field_decl":[{token:["variable.other.member.zig","text","punctuation.separator.zig","text"],regex:/([a-zA-Z_]\w*|@\".+\")(\s*)(:)(\s*)/,push:[{token:["storage.type.zig","text","punctuation.separator.zig","keyword.operator.assignment.zig"],regex:/((?:[a-zA-Z_][\w.]*|@\".+\")?)(\s*)(?:(,)|(=)|$)/,next:"pop"},{include:"#dummy_main"}]}],"#function_call":[{token:"variable.function.zig",regex:/\b(?!fn)(?:[a-zA-Z_]\w*|@\".+\")(?=\s*\()/}],"#keywords":[{token:"keyword.control.zig",regex:/\b(?:while|for|break|return|continue|asm|defer|errdefer|unreachable)\b/},{token:"keyword.control.async.zig",regex:/\b(?:async|await|suspend|nosuspend|resume)\b/},{token:"keyword.control.conditional.zig",regex:/\b(?:if|else|switch|try|catch|orelse)\b/},{token:"keyword.control.import.zig",regex:/\b(?!\w)(?:@import|@cImport|@cInclude)\b/},{token:"keyword.other.usingnamespace.zig",regex:/\busingnamespace\b/}],"#label":[{token:["keyword.control.zig","text","entity.name.label.zig","entity.name.label.zig"],regex:/\b(break|continue)(\s*:\s*)([a-zA-Z_]\w*|@\".+\")\b|\b(?!\d)([a-zA-Z_]\w*|@\".+\")\b(?=\s*:\s*(?:\{|while\b))/}],"#operators":[{token:"keyword.operator.zig",regex:/\b!\b/},{token:"keyword.operator.logical.zig",regex:/==|(?:!|>|<)=?/},{token:"keyword.operator.word.zig",regex:/\b(?:and|or)\b/},{token:"keyword.operator.assignment.zig",regex:/(?:(?:\+|-|\*)\%?|\/|%|<<|>>|&|\|(?=[^\|])|\^)?=/},{token:"keyword.operator.arithmetic.zig",regex:/(?:\+|-|\*)\%?|\/(?!\/)|%/},{token:"keyword.operator.bitwise.zig",regex:/<<|>>|&(?=[a-zA-Z_]|@\")|\|(?=[^\|])|\^|~/},{token:"keyword.operator.other.zig",regex:/\+\+|\*\*|->|\.\?|\.\*|&(?=[a-zA-Z_]|@\")|\?|\|\||\.{2,3}/}],"#param_list":[{token:["variable.parameter.zig","text","punctuation.separator.zig","text"],regex:/([a-zA-Z_]\w*|@\".+\")(\s*)(:)(\s*)/,push:[{token:["storage.type.zig","text","punctuation.separator.zig","punctuation.section.parens.end.zig"],regex:/((?:[a-zA-Z_][\w.]*|@\".+\")?)(\s*)(?:(,)|(\)))/,next:"pop"},{include:"#dummy_main"},{token:"storage.type.zig",regex:/[a-zA-Z_][\w.]*|@\".+\"/}]}],"#punctuation":[{token:"punctuation.separator.zig",regex:/,/},{token:"punctuation.terminator.zig",regex:/;/},{token:"punctuation.section.parens.begin.zig",regex:/\(/},{token:"punctuation.section.parens.end.zig",regex:/\)/}],"#storage":[{token:"storage.type.zig",regex:/\b(?:bool|void|noreturn|type|anyerror|anytype)\b/},{token:"storage.type.integer.zig",regex:/\b(?!\.)(?:[iu]\d+|[iu]size|comptime_int)\b/},{token:"storage.type.float.zig",regex:/\b(?:f16|f32|f64|f128|comptime_float)\b/},{token:"storage.type.c_compat.zig",regex:/\b(?:c_short|c_ushort|c_int|c_uint|c_long|c_ulong|c_longlong|c_ulonglong|c_longdouble|c_void)\b/},{token:["storage.type.zig","text","keyword.operator.zig","text","storage.type.zig"],regex:/\b(anyframe)\b(\s*)((?:->)?)(\s*)(?:([a-zA-Z_][\w.]*|@\".+\")\b(?!\s*\())?/},{token:"storage.type.function.zig",regex:/\bfn\b/},{token:"storage.type.test.zig",regex:/\btest\b/},{token:"storage.type.struct.zig",regex:/\bstruct\b/},{token:"storage.type.enum.zig",regex:/\benum\b/},{token:"storage.type.union.zig",regex:/\bunion\b/},{token:"storage.type.error.zig",regex:/\berror\b/}],"#storage_modifier":[{token:"storage.modifier.zig",regex:/\b(?:const|var|extern|packed|export|pub|noalias|inline|noinline|comptime|volatile|align|linksection|threadlocal|allowzero)\b/}],"#strings":[{token:"string.quoted.single.zig",regex:/\'/,push:[{token:"string.quoted.single.zig",regex:/\'/,next:"pop"},{include:"#character_escapes"},{token:"invalid.illegal.character.zig",regex:/\\[^\'][^\']*?/},{defaultToken:"string.quoted.single.zig"}]},{token:"string.quoted.double.zig",regex:/c?\"/,push:[{token:"string.quoted.double.zig",regex:/\"/,next:"pop"},{include:"#character_escapes"},{token:"invalid.illegal.character.zig",regex:/\\[^\'][^\']*?/},{defaultToken:"string.quoted.double.zig"}]},{token:"string.quoted.other.zig",regex:/c?\\\\/,push:[{token:"string.quoted.other.zig",regex:/$/,next:"pop"},{defaultToken:"string.quoted.other.zig"}]}],"#function_type":[{token:["storage.type.function.zig","text","punctuation.section.parens.begin.zig"],regex:/\b(fn)(\s*)(\()/,push:[{token:["text","storage.type.zig","text","keyword.operator.zig","text","storage.type.zig"],regex:/(\s*)(?:([a-zA-Z_]\w*|@\".+\"))?(\s*)((?:!)?)(\s*)([a-zA-Z_]\w*|@\".+\")/,next:"pop"},{include:"#label"},{include:"#param_list"},{token:"storage.type.zig",regex:/[a-zA-Z_]\w*|@\".+\"/},{include:"#dummy_main"},{defaultToken:"meta.function.parameters.zig"}]}],"#function_def":[{token:["text","entity.name.function","punctuation.section.parens.begin.zig"],regex:/(?=fn\s+)(\s+)([a-zA-Z_]\w*|@\".+\")(\()/,push:[{token:["text","storage.type.zig","keyword.operator.zig","text","storage.type.zig"],regex:/(\s*)((?:[a-zA-Z_][\w.]*|@\".+\")?)((?:!)?)(\s*)(?:([a-zA-Z_][\w.]*|@\".+\")?)/,next:"pop"},{include:"#label"},{include:"#param_list"},{token:"storage.type.zig",regex:/[a-zA-Z_][\w.]*|@\".+\"/},{include:"#dummy_main"}]}],"#support":[{token:"support.function.zig",regex:/\b@(?!\w|\"|[0-9])[a-zA-Z_]\w*\b/}],"#variables":[{token:"variable.constant.zig",regex:/\b[_A-Z][_A-Z0-9]+\b/},{token:"entity.name.type.zig",regex:/\b[_a-zA-Z][_a-zA-Z0-9]*_t\b/},{token:"entity.name.type.zig",regex:/\b[A-Z][a-zA-Z0-9]*\b/},{token:"variable.zig",regex:/\b[_a-zA-Z][_a-zA-Z0-9]*\b/}]},this.normalizeRules()};s.metaData={fileTypes:["zig"],keyEquivalent:"^~Z",name:"Zig",scopeName:"source.zig"},r.inherits(s,i),t.ZigHighlightRules=s}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(e,t,n){"use strict";var r=e("../../lib/oop"),i=e("../../range").Range,s=e("./fold_mode").FoldMode,o=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};r.inherits(o,s),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,n){var r=e.getLine(n);if(this.singleLineBlockCommentRe.test(r)&&!this.startRegionRe.test(r)&&!this.tripleStarBlockCommentRe.test(r))return"";var i=this._getFoldWidgetBase(e,t,n);return!i&&this.startRegionRe.test(r)?"start":i},this.getFoldWidgetRange=function(e,t,n,r){var i=e.getLine(n);if(this.startRegionRe.test(i))return this.getCommentRegionBlock(e,i,n);var s=i.match(this.foldingStartMarker);if(s){var o=s.index;if(s[1])return this.openingBracketBlock(e,s[1],n,o);var u=e.getCommentFoldRange(n,o+s[0].length,1);return u&&!u.isMultiLine()&&(r?u=this.getSectionRange(e,n):t!="all"&&(u=null)),u}if(t==="markbegin")return;var s=i.match(this.foldingStopMarker);if(s){var o=s.index+s[0].length;return s[1]?this.closingBracketBlock(e,s[1],n,o):e.getCommentFoldRange(n,o,-1)}},this.getSectionRange=function(e,t){var n=e.getLine(t),r=n.search(/\S/),s=t,o=n.length;t+=1;var u=t,a=e.getLength();while(++t<a){n=e.getLine(t);var f=n.search(/\S/);if(f===-1)continue;if(r>f)break;var l=this.getFoldWidgetRange(e,"all",t);if(l){if(l.start.row<=s)break;if(l.isMultiLine())t=l.end.row;else if(r==f)break}u=t}return new i(s,o,u,e.getLine(u).length)},this.getCommentRegionBlock=function(e,t,n){var r=t.search(/\s*$/),s=e.getLength(),o=n,u=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,a=1;while(++n<s){t=e.getLine(n);var f=u.exec(t);if(!f)continue;f[1]?a--:a++;if(!a)break}var l=n;if(l>o)return new i(o,r,l,t.length)}}.call(o.prototype)}),ace.define("ace/mode/zig",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/zig_highlight_rules","ace/mode/folding/cstyle"],function(e,t,n){"use strict";var r=e("../lib/oop"),i=e("./text").Mode,s=e("./zig_highlight_rules").ZigHighlightRules,o=e("./folding/cstyle").FoldMode,u=function(){this.HighlightRules=s,this.foldingRules=new o,this.$behaviour=this.$defaultBehaviour};r.inherits(u,i),function(){this.lineCommentStart="//",this.$id="ace/mode/zig"}.call(u.prototype),t.Mode=u});                (function() {
                    ace.require(["ace/mode/zig"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            