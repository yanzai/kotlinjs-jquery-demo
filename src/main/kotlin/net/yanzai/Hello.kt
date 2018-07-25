package net.yanzai

import js.externals.jquery.jQuery
import kotlinx.html.div
import kotlinx.html.dom.append
import kotlinx.html.h1
import kotlinx.html.id
import kotlinx.html.js.div
import kotlinx.html.style
import kotlin.browser.document
import kotlin.browser.window

/**
 * Example main function. Started at script body.
 * At first time you have to run `mvn package`.
 * Open example index.html in browser once you compile it.
 */
fun main(args: Array<String>) {
    // window.alert("Hello, World!")
    window.onload = { _ ->
        kotlinDslDoSomething()
        jqueryDoSomething()
    }
}

fun kotlinDslDoSomething() {
    document.body?.append {
        div {
            val suffixInfo = "(Produced by Kotlin-HTML-DSL)"
            id = "body_div"
            style = "text-align:center;"
            h1 {
                +"I am a Header$suffixInfo"
            }
            (1..10).forEach {
                div {
                    style = "color:${if (it % 2 == 0) "green" else "blue"}"
                    +"Line No.$it$suffixInfo"
                }
            }
        }
    }
}

fun jqueryDoSomething() {
    val j = jQuery
    val text = " [I am red, added by Kotlin-JQuery] "
    j("#body_div").find("h1,div").append(
            j("<span>")
                    .css("color", "red")
                    .text(text)
    )
}

