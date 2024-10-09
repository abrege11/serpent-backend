exports.profileDataQuery = (username, year) => {
  const query = `
    query userProfileData($username: String!, $year: Int) {
      userStatus {
        checkedInToday
      }
      matchedUser(username: $username) {
        userCalendar(year: $year) {
          activeYears
          streak
          totalActiveDays
          dccBadges {
            timestamp
            badge {
              name
              icon
            }
          }
          submissionCalendar
        }
      }
    }
  `;
  return query;
};

exports.envInfoQuery = () => {
    const query = `
    query questionOfToday {
        activeDailyCodingChallengeQuestion {
          date
          userStatus
          link
          question {
            acRate
            difficulty
            freqBar
            frontendQuestionId: questionFrontendId
            isFavor
            paidOnly: isPaidOnly
            status
            title
            titleSlug
            hasVideoSolution
            hasSolution
            topicTags {
              name
              id
              slug
            }
          }
        }
        allQuestionsCount {
            difficulty
            count
          }
      }
    `
    return query;
}

exports.submissionDataQuery = () => {
const query = `
query userPublicProfile($username: String!) {
        matchedUser(username: $username) {
          contestBadge {
            name
            expired
            hoverText
            icon
           }
           submitStats {
             acSubmissionNum {
               difficulty
               count
               submissions
             }
             totalSubmissionNum {
               difficulty
               count
               submissions
             }
           }
          username
          githubUrl
          twitterUrl
          linkedinUrl
          profile {
            ranking
            userAvatar
            realName
            aboutMe
            school
            websites
            countryName
            company
            jobTitle
            skillTags
            postViewCount
            postViewCountDiff
            reputation
            reputationDiff
            solutionCount
            solutionCountDiff
            categoryDiscussCount
            categoryDiscussCountDiff
          }  
        }
        recentSubmissionList(username: $username) {
            title
            titleSlug
            timestamp
            statusDisplay
            lang
            __typename
          }
          matchedUserStats: matchedUser(username: $username) {
            submitStats: submitStatsGlobal {
              acSubmissionNum {
                difficulty
                count
                submissions
                __typename
              }
              totalSubmissionNum {
                difficulty
                count
                submissions
                __typename
              }
              __typename
            }
          }
      }
      `
    return query;
}

exports.userLanguageStats = () => {
    const query = `
    query languageStats($username: String!) {
          matchedUser(username: $username) {
                languageProblemCount {
                          languageName
                                problemsSolved
                                }
                              }
                            }
    `
    return query;
}

exports.userSolutionsQuery = (username, orderBy, skip, first) => {
  const query = `
  query userSolutionTopics($username: String!, $orderBy: TopicSortingOption, $skip: Int, $first: Int) {
    userSolutionTopics(
      username: $username
      orderBy: $orderBy
      skip: $skip
      first: $first
    ) {
      edges {
        node {
          id
          title
          url
          viewCount
          questionTitle
          post {
            creationDate
            voteCount
          }
        }
      }
    }
  }
  `
  return query;
}