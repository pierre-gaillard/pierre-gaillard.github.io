# encoding=utf8
import sys
reload(sys)
import markdown
sys.setdefaultencoding('utf8')
mdProcessor = markdown.Markdown(extensions=['mathjax'])
myHtmlFragment = str(mdProcessor.convert(sys.argv[1]))
exit(myHtmlFragment)
