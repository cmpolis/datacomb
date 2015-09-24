#' Datacomb
#'
#' An interactive interface for viewing and combing through data frames.
#'
#' @param data a data object of a class that can be converted into a
#'          \code{data.frame}
#' @param columns names of the columns in \code{data}
#'          to use as dimensions
#' @param rowLabel name of the column in \code{data}
#'          that provides the row label
#' @param width,height valid \code{CSS} size unit for the
#'          width and height of the datacomb.  The default is
#'          \code{100\%} to fill the entire viewing area.
#'
#' @example ./inst/examples/examples.R
#' @import htmlwidgets
#'
#' @export
Datacomb <- function(
  data = NULL, columns = colnames(data), rowLabel = NULL,
  width = '100%', height = '100%'
) {

  # try to be smart if row names are character
  #   and assume these will be rowLabel
  if(is.character(rownames(data)) && is.null(rowLabel)) {
    data = data.frame(
      name = rownames(data),
      data,
      check.names = FALSE,
      stringsAsFactors = FALSE
    )
    # use are opinionated name as rowLabel and exclude from columns
    if(!is.na(match("name",columns))){
      columns = columns[-match("name",columns)]
      rowLabel = "name"
    }
  }

  if(!inherits(data, "data.frame")){
    try({ data = as.data.frame(data, check.names = FALSE) })
  }

  # build object of config options
  opts = list(
    data = data,
    columns = columns,
    rowLabel = rowLabel
  )

  # create widget
  htmlwidgets::createWidget(
    name = 'datacomb',
    opts,
    width = width,
    height = height,
    package = 'datacomb'
  )
}

#' Widget output function for use in Shiny
#'
#' @export
DatacombOutput <- function(outputId, width = '100%', height = '400px'){
  shinyWidgetOutput(outputId, 'datacomb', width, height, package = 'datacomb')
}

#' Widget render function for use in Shiny
#'
#' @export
renderDatacomb <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) } # force quoted
  shinyRenderWidget(expr, DatacombOutput, env, quoted = TRUE)
}
