
import java.util.*;

public class Determine {
  public static void main (String[] args){

    Dictionary<String, Double> info = new Hashtable<String, Double>();
    // Inserting values into the Dictionary
    info.put("Age", 22.0);
    info.put("Happiness", 0.2);
    info.put("Surprise", 0.5);
    info.put("Neutral", 0.6);
    info.put("Disgust", 0.73);
    info.put("Sadness", 0.12);
    info.put("Anger", 0.32);
    info.put("Contempt", 0.43);
    info.put("Fear", 0.54);

    int mood = calculateMoodScore(info);
    int age = calculateAgeScore(info);
    int totalScore = mood + age;
    System.out.println("Your mood score is " + mood);
    System.out.println("Your age score is " + age);
    System.out.println("Your total score is " + totalScore);

    if (totalScore <= 0){
      System.out.println("You should walk");
    } else {
      System.out.println("You should take the bus");
    }
  } // main

  public static int calculateMoodScore(Dictionary<String, Double> info){
    int moodScore = 0;
    double totalHappy = info.get("Happiness") + info.get("Surprise");
    double totalSad = info.get("Disgust") + info.get("Sadness")+ info.get("Anger")
                      + info.get("Contempt") + info.get("Fear");
    double avgHappy = totalHappy / 2;
    double avgNeutral = info.get("Neutral");
    double avgSad = totalSad / 5;

    if(avgHappy > avgNeutral && avgHappy > avgSad)
        {
            moodScore++;
        }
        else if(avgNeutral < avgSad)
        {
            moodScore--;
        }
    return moodScore;
  } // calculateMoodScore

  public static int calculateAgeScore(Dictionary<String, Double> info){
    double age = info.get("Age");
    int ageScore = 0;

    if (age < 25){
      ageScore = ageScore - 2;
    } else if (25 < age && age < 40){
      ageScore--;
    } else if (40 < age && age < 60){
      ageScore++;
    } else{
      ageScore = ageScore + 2;
    }
    return ageScore;
  } // calculateAgeScore
} // Determine
