-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 02, 2022 at 08:50 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `institute`
--

-- --------------------------------------------------------

--
-- Table structure for table `about`
--

CREATE TABLE `about` (
  `About_ID` int(11) NOT NULL,
  `AboutTitle1` text NOT NULL,
  `AboutDesc1` text NOT NULL,
  `AboutTitle2` text NOT NULL,
  `AboutDesc2` text NOT NULL,
  `HomeAbout` text NOT NULL,
  `InstituteName` text NOT NULL,
  `CopyRight` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `about`
--

INSERT INTO `about` (`About_ID`, `AboutTitle1`, `AboutDesc1`, `AboutTitle2`, `AboutDesc2`, `HomeAbout`, `InstituteName`, `CopyRight`) VALUES
(1, '1 Regal Institute', '1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eos deleniti labore nihil dolore Unde eos deleniti labore nihil dolore Unde eos deleniti labore nihil dolore Unde eos deleniti labore nihil dolore dignissimos neque, nulla excepturi architecto, enim aut dolorem asperiores quis numquam laudantium, nam rerum amet? Id.\r\n\r\n', '2 Regal Goal', '2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eos deleniti labore nihil dolore Unde eos deleniti labore nihil dolore Unde eos deleniti labore nihil dolore Unde eos deleniti labore nihil dolore dignissimos neque, nulla excepturi architecto, enim aut dolorem asperiores quis numquam laudantium, nam rerum amet? Id.\r\n\r\n', 'xtar dhananjay Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae ad, itaque ullam, voluptates dolores odit voluptatibus saepe veniam eius facilis quibusdam hic atque, quae rerum asperiores accusantium dicta consectetur qui! xtar dhananjay', 'Regal 1', '© 2022 Computer Institute Rights Reserved. Xtar Dhananjay');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `Category_ID` int(11) NOT NULL,
  `Category_Name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`Category_ID`, `Category_Name`) VALUES
(38, 'Basic Computer Course'),
(39, 'Diploma In Computer Application'),
(40, 'Advance Diploma In Computer Application'),
(41, 'Web Development'),
(42, 'Graphic Designing'),
(45, 'Advance Excel'),
(46, 'Android Development');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `Contact_ID` int(11) NOT NULL,
  `Contact_Name` text NOT NULL,
  `Contact_Phone` text NOT NULL,
  `Contact_Message` text NOT NULL,
  `Contact_Time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`Contact_ID`, `Contact_Name`, `Contact_Phone`, `Contact_Message`, `Contact_Time`) VALUES
(1, 'Dhananjay Gupta', '2323112312', 'Hii', '2022-09-27 00:52:56'),
(2, 'Karan Sharma', '8368692759', 'Hii Dhananjay Gupta', '2022-09-27 07:41:04'),
(3, 'Karan Sharma', '8368692759', 'Hii Dhananjay Gupta', '2022-09-27 07:41:05'),
(4, 'Karan Sharma', '8368692759', 'Hii Dhananjay Gupta', '2022-09-27 07:41:07'),
(5, 'Karan Sharma', '8368692759', 'Hii Dhananjay Gupta', '2022-09-27 07:41:09'),
(6, 'Karan Sharma', '8368692759', 'Hii Dhananjay Gupta', '2022-09-27 07:41:10'),
(35, 'Mukesh', '2923892329', 'Hii Sandeep', '2022-09-27 10:47:53'),
(36, 'Hunny Singh', '8291231222', 'Hii Dhananjay Gupta', '2022-09-27 11:04:24'),
(37, 'Hunny Singh', '8291231222', 'Hii Dhananjay Gupta', '2022-09-27 11:04:25'),
(38, 'Hunny Singh', '8291231222', 'Hii Dhananjay Gupta', '2022-09-27 11:04:27'),
(39, 'Hunny Singh', '8291231222', 'Hii Dhananjay Gupta', '2022-09-27 11:04:28'),
(40, 'Hunny Singh', '8291231222', 'Hii Dhananjay Gupta', '2022-09-27 11:04:28'),
(41, 'Hunny Singh', '8291231222', 'Hii Dhananjay Gupta', '2022-09-27 11:04:29'),
(42, 'Hunny Singh', '8291231222', 'Hii Dhananjay Gupta', '2022-09-27 11:04:30'),
(43, 'Hunny Singh', '8291231222', 'Hii Dhananjay Gupta', '2022-09-27 11:04:54'),
(44, 'Hunny Singh', '8291231222', 'Hii Dhananjay Gupta', '2022-09-27 11:05:03'),
(45, 'Hunny Singh', '8291231222', 'Hii Dhananjay Gupta', '2022-09-27 11:05:15'),
(46, 'Hunny Singh', '8291231222', 'Hii Dhananjay Gupta', '2022-09-27 11:05:21'),
(47, 'Hunny Singh', '8291231222', 'Hii Dhananjay Gupta', '2022-09-27 11:05:22'),
(48, 'Hunny Singh', '8291231222', 'Hii Dhananjay Gupta', '2022-09-27 11:05:22'),
(49, 'Hunny Singh', '8291231222', 'Hii Dhananjay Gupta', '2022-09-27 11:05:24'),
(50, 'Hunny Singh', '8291231222', 'Hii Dhananjay Gupta', '2022-09-27 11:05:25'),
(51, 'Hunny Singh', '8291231222', 'Hii Dhananjay Gupta', '2022-09-27 11:05:26'),
(52, 'Hunny Singh', '8291231222', 'Hii Dhananjay Gupta', '2022-09-27 11:05:27'),
(53, 'Hunny Singh', '8291231222', 'Hii Dhananjay Gupta', '2022-09-27 11:05:27'),
(54, 'Hunny Singh', '8291231222', 'Hii Dhananjay Gupta', '2022-09-27 11:05:28'),
(55, 'Hunny Singh', '8291231222', 'Hii Dhananjay Gupta', '2022-09-27 11:05:29'),
(56, 'Hunny Singh', '8291231222', 'Hii Dhananjay Gupta', '2022-09-27 11:05:30'),
(57, 'Hunny Singh', '8291231222', 'Hii Dhananjay Gupta', '2022-09-27 11:05:31'),
(58, 'Hunny Singh', '8291231222', 'Hii Dhananjay Gupta', '2022-09-27 11:05:31'),
(59, 'Hunny Singh', '8291231222', 'Hii Dhananjay Gupta', '2022-09-27 11:05:32'),
(60, 'Hunny Singh', '8291231222', 'Hii Dhananjay Gupta', '2022-09-27 11:05:33'),
(61, 'Hunny Singh', '8291231222', 'Hii Dhananjay Gupta', '2022-09-27 11:05:33'),
(62, 'Hunny Singh', '8291231222', 'Hii Dhananjay Gupta', '2022-09-27 11:05:34'),
(63, 'Hunny Singh', '8291231222', 'Hii Dhananjay Gupta', '2022-09-27 11:05:35'),
(64, 'Hunny Singh', '8291231222', 'Hii Dhananjay Gupta', '2022-09-27 11:05:35'),
(65, 'Hunny Singh', '8291231222', 'Hii Dhananjay Gupta', '2022-09-27 11:05:36'),
(66, 'Naman Roy', '9971455192', 'Hii Sandeep I\'m Your big fan', '2022-09-27 11:06:51'),
(67, 'sdf', '1212121212', '12', '2022-10-02 22:18:31'),
(68, 'asdf', '2323232323', '12', '0000-00-00 00:00:00'),
(69, '233', '2322323232', '33', '2022-10-02 19:29:10'),
(70, 'Sandeep Prajapati', '2368692759', '1212', '2022-10-02 23:00:14'),
(71, 'mukesh', '1212121212', 'sdfsdf', '2022-10-02 23:12:23');

-- --------------------------------------------------------

--
-- Table structure for table `contactinfo`
--

CREATE TABLE `contactinfo` (
  `CInfo_ID` int(11) NOT NULL,
  `CInfo_Map` text NOT NULL,
  `CInfo_Email` text NOT NULL,
  `CInfo_Phone1` text NOT NULL,
  `CInfo_Phone2` text NOT NULL,
  `CInfo_Timing` text NOT NULL,
  `CInfo_Address` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contactinfo`
--

INSERT INTO `contactinfo` (`CInfo_ID`, `CInfo_Map`, `CInfo_Email`, `CInfo_Phone1`, `CInfo_Phone2`, `CInfo_Timing`, `CInfo_Address`) VALUES
(1, '<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.3706740069692!2d77.15276291556822!3d28.648617890102376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d02fae079bd5f%3A0x60f68e65c0f23d39!2sREGAL%20COMPUTER%20INSTITUTE!5e0!3m2!1sen!2sin!4v1660892715268!5m2!1sen!2sin\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>', 'XtarDhananjay@Gmail.Com', '8368692759', '9971455192', 'Monday—Friday 10:00 AM — 6:00 PM Saturday—Sunday closed', 'A-262 Basement, Shivalik, Malviye Nager, New Delhi, Delhi, india 110017');

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

CREATE TABLE `course` (
  `Course_ID` int(11) NOT NULL,
  `Img` text NOT NULL,
  `CourseTitle` text NOT NULL,
  `Price` int(11) NOT NULL,
  `NFA` int(11) NOT NULL,
  `Rating` int(11) NOT NULL,
  `ClassDuration` text NOT NULL,
  `WeeklyHoliday` text NOT NULL,
  `CourseDuration` text NOT NULL,
  `FeePay` text NOT NULL,
  `Description` text NOT NULL,
  `Content` text NOT NULL,
  `BestCourse` text NOT NULL,
  `DateTime` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `course`
--

INSERT INTO `course` (`Course_ID`, `Img`, `CourseTitle`, `Price`, `NFA`, `Rating`, `ClassDuration`, `WeeklyHoliday`, `CourseDuration`, `FeePay`, `Description`, `Content`, `BestCourse`, `DateTime`) VALUES
(90, 'Pro_1612651980_2022-09-23_PhotoShop.png', 'PhotoShop With Hema Mam', 699, 92, 5, '1 Hour', 'Sunday', '1 Year', 'Monthly', 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.', 'Filter,Color,Color Gredent,Color Combination,All Tools,Image,PNG,JPEG,JPG', '', '2022-09-23 14:06:46'),
(99, 'Pro_1052612882_2022-09-23_PhotoShop.png', 'PhotoShop With Hema Mam', 699, 92, 5, '1 Hour', 'Sunday', '1 Year', 'Monthly', 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.', 'Filter,Color,Color Gredent,Color Combination,All Tools,Image,PNG,JPEG,JPG', '', '2022-09-23 14:06:47'),
(100, 'Pro_887917183_2022-09-23_PhotoShop.png', 'PhotoShop With Hema Mam', 699, 92, 5, '1 Hour', 'Sunday', '1 Year', 'Monthly', 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.', 'Filter,Color,Color Gredent,Color Combination,All Tools,Image,PNG,JPEG,JPG', '', '2022-09-23 14:06:48'),
(101, 'Pro_1938835996_2022-09-23_PhotoShop.png', 'PhotoShop With Hema Mam', 699, 92, 5, '1 Hour', 'Sunday', '1 Year', 'Monthly', 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.', 'Filter,Color,Color Gredent,Color Combination,All Tools,Image,PNG,JPEG,JPG', '', '2022-09-23 14:06:48'),
(107, 'Pro_1514202195_2022-09-23_PhotoShop.png', 'PhotoShop With Hema Mam', 699, 92, 5, '1 Hour', 'Sunday', '1 Year', 'Monthly', 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.', 'Filter,Color,Color Gredent,Color Combination,All Tools,Image,PNG,JPEG,JPG', 'Best', '2022-09-23 14:06:49'),
(108, 'Pro_1634479514_2022-09-27_Excel.png', 'PhotoShop With Hema Mam', 699, 92, 4, '1 Hour', 'Sunday', '1 Year', 'Monthly', 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.', 'Filter,Color,Color Gredent,Color Combination,All Tools,Image,PNG,JPEG,JPG', 'Best', '2022-09-23 14:06:49'),
(117, 'Pro_557969368_2022-09-23_Python.png', 'Python With Xtar Dhananjay', 699, 92, 4, '2 Hour', 'Monday', '6 Month', 'Yearly', 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.', 'X,Color,Color Gredent,Color Combination,All Tools,Image,PNG,JPEG,JPG,X,X', 'Best', '2022-09-23 14:07:42'),
(120, 'Pro_633000243_2022-10-02_PhotoShop.png', 'Photoshop with xtar dhananjay', 23, 23, 2, '1 Hour', 'Sunday', '2 Month', 'Monthly', '231', 's,w,r,w', '', '2022-10-02 08:06:10'),
(121, 'Pro_1694031751_2022-10-02_Python.png', 'Python Course', 888, 89, 0, '2 Hour', 'Sunday', '1 Year', 'Monthly', 'This is the best python course forever.', 'Object,Erithmatic Orator,Object,Array,Data Types,Logics', '', '2022-10-02 08:07:59'),
(122, 'Pro_1026106122_2022-10-02_Excel.png', 'Sandeep', 3223, 23, 3, '1 Hour', 'Sunday', '2 Year', 'Monthly', 'this is the', 'asdf,sdf,asdf', '', '2022-10-03 00:13:52');

-- --------------------------------------------------------

--
-- Table structure for table `feature`
--

CREATE TABLE `feature` (
  `Feature_ID` int(11) NOT NULL,
  `Feature` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `feature`
--

INSERT INTO `feature` (`Feature_ID`, `Feature`) VALUES
(1, 'Teacher and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without'),
(2, 'Notes and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without'),
(3, 'Help Center and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without');

-- --------------------------------------------------------

--
-- Table structure for table `inquiry`
--

CREATE TABLE `inquiry` (
  `Message_ID` int(11) NOT NULL,
  `Name` text NOT NULL,
  `Age` text NOT NULL,
  `Phone` text NOT NULL,
  `Course` text NOT NULL,
  `Message` text NOT NULL,
  `DateTime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `inquiry`
--

INSERT INTO `inquiry` (`Message_ID`, `Name`, `Age`, `Phone`, `Course`, `Message`, `DateTime`) VALUES
(1, 'Dhananjay Gupta', '45', '9971455192', 'Basic Computer', 'hii', '2022-09-26 11:03:53'),
(2, 'Dhananjay Gupta', '18', '8368692759', 'Web Development', 'hii mam i want to learn Web Development form your institute', '2022-09-26 11:15:55'),
(3, 'Naman Roy', '23', '8921932742', 'Advance Excel', '', '2022-09-26 11:17:30'),
(4, 'Sandeep Gupta', '18', '8368692759', 'Android Development', 'Hii Want to learn Web Development', '2022-09-27 07:08:21'),
(5, 'Mukesh', '28', '8239423423', 'Basic Computer Course', 'Hii Sandeep', '2022-09-27 07:09:55'),
(6, 'Mukesh', '28', '8239423423', 'Basic Computer Course', 'Hii Sandeep', '2022-09-27 07:09:59'),
(7, 'Mukesh', '28', '8239423423', 'Basic Computer Course', 'Hii Sandeep', '2022-09-27 07:10:00'),
(8, 'Mukesh', '28', '8239423423', 'Basic Computer Course', 'Hii Sandeep', '2022-09-27 07:10:01'),
(9, 'Mukesh', '28', '8239423423', 'Basic Computer Course', 'Hii Sandeep', '2022-09-27 07:10:01'),
(10, 'Mukesh', '28', '8239423423', 'Basic Computer Course', 'Hii Sandeep', '2022-09-27 07:10:02'),
(37, 'Mukesh', '23', '2323232323', 'Basic Computer Course', 'asdf', '2022-09-27 07:53:57'),
(38, 'Mukesh', '23', '2323232323', 'Basic Computer Course', 'asdf', '2022-09-27 07:53:58'),
(39, 'Mukesh', '23', '2323232323', 'Basic Computer Course', 'asdf', '2022-09-27 07:53:59'),
(40, 'Mukesh', '23', '2323232323', 'Basic Computer Course', 'asdf', '2022-09-27 07:53:59'),
(41, 'Mukesh', '23', '2323232323', 'Basic Computer Course', 'asdf', '2022-09-27 07:54:04'),
(43, 'Mukesh', '12', '1212121212', 'Select Course', '', '2022-09-27 10:50:10'),
(44, 'Ajay Gupta', '11', '8989823232', 'Advance Diploma In Computer Application', 'Hii I want to learn from You', '2022-09-27 10:57:32'),
(45, 'Ajay Gupta', '11', '8989823232', 'Advance Diploma In Computer Application', 'Hii I want to learn from You', '2022-09-27 11:00:12'),
(46, 'Ajay Gupta', '11', '8989823232', 'Advance Diploma In Computer Application', 'Hii I want to learn from You', '2022-09-27 11:00:13'),
(47, 'Ajay Gupta', '11', '8989823232', 'Advance Diploma In Computer Application', 'Hii I want to learn from You', '2022-09-27 11:00:13'),
(48, 'Ajay Gupta', '11', '8989823232', 'Advance Diploma In Computer Application', 'Hii I want to learn from You', '2022-09-27 11:00:14'),
(49, 'Ajay Gupta', '11', '8989823232', 'Advance Diploma In Computer Application', 'Hii I want to learn from You', '2022-09-27 11:00:15'),
(50, 'Ajay Gupta', '11', '8989823232', 'Advance Diploma In Computer Application', 'Hii I want to learn from You', '2022-09-27 11:00:16'),
(51, 'Ajay Gupta', '11', '8989823232', 'Advance Diploma In Computer Application', 'Hii I want to learn from You', '2022-09-27 11:00:16'),
(52, 'Ajay Gupta', '11', '8989823232', 'Advance Diploma In Computer Application', 'Hii I want to learn from You', '2022-09-27 11:00:17'),
(53, 'Ajay Gupta', '11', '8989823232', 'Advance Diploma In Computer Application', 'Hii I want to learn from You', '2022-09-27 11:00:18'),
(54, 'Sandeep Prajapati', '11', '8989823232', 'Advance Diploma In Computer Application', 'Dhananjay xxxxxxxxxxxxxx', '2022-09-27 11:00:18'),
(55, 'Ajay Gupta', '11', '8989823232', 'Advance Diploma In Computer Application', 'Hii I want to learn from You', '2022-09-27 11:00:19'),
(56, 'Ajay Gupta', '11', '8989823232', 'Advance Diploma In Computer Application', 'Hii I want to learn from You', '2022-09-27 11:00:21'),
(57, 'Ajay Gupta', '11', '8989823232', 'Advance Diploma In Computer Application', 'Hii I want to learn from You', '2022-09-27 11:00:22'),
(58, 'Ajay Gupta', '11', '8989823232', 'Advance Diploma In Computer Application', 'Hii I want to learn from You', '2022-09-27 11:00:22'),
(59, 'Ajay Gupta', '11', '8989823232', 'Advance Diploma In Computer Application', 'Hii I want to learn from You', '2022-09-27 11:05:46'),
(60, 'sdf', '45', '2123232323', 'Advance Excel', 'sd', '2022-10-02 19:37:53'),
(61, 'Sandeep Prajapati', '12', '1212121212', 'Diploma In Computer Application', '23sd', '2022-10-02 23:08:58');

-- --------------------------------------------------------

--
-- Table structure for table `qn`
--

CREATE TABLE `qn` (
  `QN_ID` int(11) NOT NULL,
  `Question` text NOT NULL,
  `Answer` text NOT NULL,
  `DateTime` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `qn`
--

INSERT INTO `qn` (`QN_ID`, `Question`, `Answer`, `DateTime`) VALUES
(9, 'Why choose this institute ..?', 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. 1', '2022-09-26 06:52:19'),
(10, 'How to join regal institute ...?', 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. 2', '2022-09-30 11:39:49'),
(11, 'Regal Issue certificate for students ..?', 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. 3', '2022-09-30 11:40:39'),
(12, 'Who teaching me in regal institute ..?', 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. 4', '2022-09-30 11:41:28'),
(14, 'Famous course in regal institute ..?', 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. 5', '2022-09-30 11:42:49');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `SN` int(11) NOT NULL,
  `Student_Img` text NOT NULL,
  `Student_ID` text NOT NULL,
  `Student_Name` text NOT NULL,
  `Father_Name` text NOT NULL,
  `Gander` text NOT NULL,
  `Education` text NOT NULL,
  `DOB` text NOT NULL,
  `Admission_Date` text NOT NULL,
  `Phone` text NOT NULL,
  `Email` text NOT NULL,
  `Address` text NOT NULL,
  `Course_Name` text NOT NULL,
  `Coursoe_Date` text NOT NULL,
  `Batch` text NOT NULL,
  `Roll_No` text NOT NULL,
  `Certificate_ID` text NOT NULL,
  `DateTime` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`SN`, `Student_Img`, `Student_ID`, `Student_Name`, `Father_Name`, `Gander`, `Education`, `DOB`, `Admission_Date`, `Phone`, `Email`, `Address`, `Course_Name`, `Coursoe_Date`, `Batch`, `Roll_No`, `Certificate_ID`, `DateTime`) VALUES
(10, 'Sut_1439547921_2022-09-22_CEO.png', '2209202208202336', 'Sandeep Prajapati', 'Ramesh Prajapati', 'Male', 'B.Tech', '2011-03-02', '22/09/2022', '8368692759', 'xtardhananjay@gmail.com', 'Delhi, Patel Nagar', 'Basic Computer Course', '2022-09-04', '09:00 - 10:00', '65610', 'BVD3O42256232382022', '2022-09-22 20:20:23'),
(11, 'Sut_2073977472_2022-09-22_CEO.png', '2209202208202496', 'Sandeep Prajapati', 'Ramesh Prajapati', 'Male', 'B.Tech', '2011-03-02', '22/09/2022', '8368692759', 'xtardhananjay@gmail.com', 'Delhi, Patel Nagar', '', '', '', '', '1', '2022-09-22 20:20:24'),
(16, 'Sut_1096284157_2022-09-22_CEO.png', '2209202208203242', 'Sandeep Prajapati', 'Ramesh Prajapati', 'Male', 'B.Tech', '2011-03-02', '22/09/2022', '8368692759', 'xtardhananjay@gmail.com', 'Delhi, Patel Nagar', '', '', '', '', '', '2022-09-22 20:20:32'),
(25, 'Sut_383341498_2022-09-22_CEO.png', '2209202208204548', 'Sandeep Prajapati', 'Ramesh Prajapati', 'Male', 'B.Tech', '2011-03-02', '22/09/2022', '8368692759', 'xtardhananjay@gmail.com', 'Delhi, Patel Nagar', '', '', '', '', '', '2022-09-22 20:20:45'),
(26, 'Sut_568057254_2022-09-22_CEO.png', '2209202208204596', 'Sandeep Prajapati', 'Ramesh Prajapati', 'Male', 'B.Tech', '2011-03-02', '22/09/2022', '8368692759', 'xtardhananjay@gmail.com', 'Delhi, Patel Nagar', '', '', '', '', '', '2022-09-22 20:20:45'),
(37, 'Sut_660249879_2022-09-22_XtarNeha.png', '2209202208343713', 'Sneha Roy', 'Mukesh Roy ', 'Female', 'Graduate', '2003-12-17', '22/09/2022', '1123232343', 'xtarsneha@gmail.com', 'Delhi, Patel Nagar', '', '', '', '', '', '2022-09-22 20:34:37'),
(38, 'Sut_430937334_2022-09-22_XtarNeha.png', '2209202208343845', 'Sneha Roy', 'Mukesh Roy ', 'Female', 'Graduate', '2003-12-17', '22/09/2022', '1123232343', 'xtarsneha@gmail.com', 'Delhi, Patel Nagar', '', '', '', '', '', '2022-09-22 20:34:38'),
(39, 'Sut_1459606031_2022-09-22_XtarNeha.png', '2209202208343829', 'Sneha Roy', 'Mukesh Roy ', 'Female', 'Graduate', '2003-12-17', '22/09/2022', '1123232343', 'xtarsneha@gmail.com', 'Delhi, Patel Nagar', 'Advance Excel, Web Development, Diploma In Computer Application', '2022-09-20, 2022-09-10, 2022-09-30', '17:00 - 18:00, 15:00 - 16:00, 20:00 - 21:00', '40939, 18939, 74639', 'TPLY9G2243112382022, 9MTYCS2243112382022, 6EZHLV2251412382022', '2022-09-22 20:34:38'),
(40, 'Sut_791946046_2022-09-22_XtarNeha.png', '2209202208343865', 'Sneha Roy', 'Mukesh Roy ', 'Female', 'Graduate', '2003-12-17', '22/09/2022', '1123232343', 'xtarsneha@gmail.com', 'Delhi, Patel Nagar', '', '', '', '', '', '2022-09-22 20:34:38'),
(45, 'Sut_433858654_2022-09-22_XtarNeha.png', '2209202208344051', 'Sneha Roy', 'Mukesh Roy ', 'Female', 'Graduate', '2003-12-17', '22/09/2022', '1123232343', 'xtarsneha@gmail.com', 'Delhi, Patel Nagar', '', '', '', '', '', '2022-09-22 20:34:40'),
(47, 'Sut_501194321_2022-09-22_XtarNeha.png', '2209202208344185', 'Sneha Roy', 'Mukesh Roy ', 'Female', 'Graduate', '2003-12-17', '22/09/2022', '1123232343', 'xtarsneha@gmail.com', 'Delhi, Patel Nagar', 'Advance Diploma In Computer Application, Web Development', '2022-09-03, 2022-09-20', '08:00 - 09:00, 11:00 - 12:00', '94451, 26551', 'WC32232234532382022, OD9Z292234532382022', '2022-09-22 20:34:41'),
(48, 'Sut_443649287_2022-09-22_XtarNeha.png', '2209202208344188', 'Sneha Roy', 'Mukesh Roy ', 'Female', 'Graduate', '2003-12-17', '22/09/2022', '1123232343', 'xtarsneha@gmail.com', 'Delhi, Patel Nagar', '', '', '', '', '', '2022-09-22 20:34:41'),
(49, 'Sut_1153140918_2022-09-22_XtarNeha.png', '2209202208344135', 'Sneha Roy', 'Mukesh Roy ', 'Female', 'Graduate', '2003-12-17', '22/09/2022', '1123232343', 'xtarsneha@gmail.com', 'Delhi, Patel Nagar', '', '', '', '', '', '2022-09-22 20:34:41'),
(50, 'Sut_2045270426_2022-09-22_XtarNeha.png', '2209202208352168', 'Sneha Roy', 'Mukesh Roy ', 'Female', 'Graduate', '2003-12-17', '22/09/2022', '1123232343', 'xtarsneha@gmail.com', 'Delhi, Patel Nagar', '', '', '', '', '', '2022-09-22 20:35:21'),
(51, 'Sut_1503469366_2022-09-22_XtarNeha.png', '2209202208352130', 'Sneha Roy', 'Mukesh Roy ', 'Female', 'Graduate', '2003-12-17', '22/09/2022', '1123232343', 'xtarsneha@gmail.com', 'Delhi, Patel Nagar', 'Advance Excel, Basic Computer Course', '2022-09-14, 2022-09-03', '10:00 - 11:00, 22:00 - 23:00', '42851, 48651', 'A4SWFI2228562382022, UXG7KF2228562382022', '2022-09-22 20:35:21'),
(57, 'Sut_1822126104_2022-09-23_XtarNitin.png', '2309202211005386', 'Sonu Sharma', 'Dhananjay Sharma', 'Female', 'B.Com', '2008-02-13', '23/09/2022', '9971455192', 'Sonu@gmail.com', 'New Delhi, Baljeet Nagar, Nepali Mandir', '', '', '', '', '', '2022-09-23 23:00:53'),
(58, 'Sut_2104546120_2022-09-23_XtarNitin.png', '2309202211005426', 'Sonu Sharma', 'Dhananjay Sharma', 'Female', 'B.Com', '2008-02-13', '23/09/2022', '9971455192', 'Sonu@gmail.com', 'New Delhi, Baljeet Nagar, Nepali Mandir', 'Diploma In Computer Application', '2022-08-31', '08:00 - 09:00', '45758', 'LI7NMV235112482022', '2022-09-23 23:00:54'),
(59, 'Sut_482378613_2022-09-23_XtarNitin.png', '2309202211005614', 'Sonu Sharma', 'Dhananjay Sharma', 'Female', 'B.Com', '2008-02-13', '23/09/2022', '9971455192', 'Sonu@gmail.com', 'New Delhi, Baljeet Nagar, Nepali Mandir', '', '', '', '', '', '2022-09-23 23:00:56'),
(62, 'Sut_309407846_2022-09-23_XtarNitin.png', '2309202211005740', 'Sonu Sharma', 'Dhananjay Sharma', 'Female', 'B.Com', '2008-02-13', '23/09/2022', '9971455192', 'Sonu@gmail.com', 'New Delhi, Baljeet Nagar, Nepali Mandir', '', '', '', '', '', '2022-09-23 23:00:57'),
(63, 'Sut_2010593534_2022-09-23_XtarNitin.png', '2309202211005717', 'Sonu Sharma', 'Dhananjay Sharma', 'Female', 'B.Com', '2008-02-13', '23/09/2022', '9971455192', 'Sonu@gmail.com', 'New Delhi, Baljeet Nagar, Nepali Mandir', '', '', '', '', '', '2022-09-23 23:00:57'),
(64, 'Sut_1806584233_2022-09-23_XtarNitin.png', '2309202211005744', 'Sonu Sharma', 'Dhananjay Sharma', 'Female', 'B.Com', '2008-02-13', '23/09/2022', '9971455192', 'Sonu@gmail.com', 'New Delhi, Baljeet Nagar, Nepali Mandir', 'Advance Diploma In Computer Application', '2022-09-13', '11:00 - 12:00', '10864', '1PUKR8124272482022', '2022-09-23 23:00:57'),
(67, 'Sut_587051289_2022-09-23_XtarNitin.png', '2309202211005834', 'Sonu Sharma', 'Dhananjay Sharma', 'Female', 'B.Com', '2008-02-13', '23/09/2022', '9971455192', 'Sonu@gmail.com', 'New Delhi, Baljeet Nagar, Nepali Mandir', '', '', '', '', '', '2022-09-23 23:00:58'),
(71, 'Sut_551440346_2022-09-23_XtarNitin.png', '2309202211010037', 'Sonu Sharma 1', 'Dhananjay Sharma', 'Female', 'B.Com', '2008-02-13', '23/09/2022', '9971455192', 'Sonu@gmail.com', 'New Delhi, Baljeet Nagar, Nepali Mandir', '', '', '', '', '', '2022-09-23 23:01:00');

-- --------------------------------------------------------

--
-- Table structure for table `team`
--

CREATE TABLE `team` (
  `Team_ID` int(11) NOT NULL,
  `Team_Img` text NOT NULL,
  `Team_Name` text NOT NULL,
  `Team_Position` text NOT NULL,
  `BestTeachers` text NOT NULL,
  `DateTime` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `team`
--

INSERT INTO `team` (`Team_ID`, `Team_Img`, `Team_Name`, `Team_Position`, `BestTeachers`, `DateTime`) VALUES
(10, 'Pro_1511701269_2022-09-29_XtarDhananjay.png', 'Sahil Kimar', 'Tally Teacher', 'Best', '2022-09-29 16:07:52'),
(11, 'Pro_881779912_2022-09-29_XtarNeha.png', 'Neha Sharma', 'Computer Oprator', 'Best', '2022-09-29 16:08:13'),
(12, 'Pro_274199063_2022-09-29_XtarNitin.png', 'Karan Gupta', 'Android Developer', 'Best', '2022-09-29 16:08:40'),
(14, 'Pro_1253801757_2022-09-30_XtarDhananjay.png', 'Naman Roy', 'CEO', '', '2022-09-30 17:31:03');

-- --------------------------------------------------------

--
-- Table structure for table `topstudent`
--

CREATE TABLE `topstudent` (
  `TopStudent_ID` int(11) NOT NULL,
  `TopStudent_Img` text NOT NULL,
  `TopStudent_Name` text NOT NULL,
  `TopStudent_Course` text NOT NULL,
  `DateTime` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `topstudent`
--

INSERT INTO `topstudent` (`TopStudent_ID`, `TopStudent_Img`, `TopStudent_Name`, `TopStudent_Course`, `DateTime`) VALUES
(151, 'Pro_702621581_2022-09-30_CEO.png', 'Xtar Dhananjay', 'Web Developer', '2022-09-27 17:22:14'),
(153, 'Pro_1607453304_2022-09-30_CEO.png', 'Nitish Gupta', 'Android Developer', '2022-09-30 11:21:49'),
(159, 'Pro_822365187_2022-09-30_CEO.png', 'Naman Roy', 'Basic Computer', '2022-09-30 13:23:13');

-- --------------------------------------------------------

--
-- Table structure for table `totalviews`
--

CREATE TABLE `totalviews` (
  `TotalViews_ID` int(255) NOT NULL,
  `TotalViews_Count` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `totalviews`
--

INSERT INTO `totalviews` (`TotalViews_ID`, `TotalViews_Count`) VALUES
(1, 1157);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `User_ID` int(11) NOT NULL,
  `UserImg` text NOT NULL,
  `UserFullName` text NOT NULL,
  `UserName` text NOT NULL,
  `UserPassword` text NOT NULL,
  `User_Role` text NOT NULL,
  `DateTime` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`User_ID`, `UserImg`, `UserFullName`, `UserName`, `UserPassword`, `User_Role`, `DateTime`) VALUES
(16, 'Pro_378007659_2022-09-29_CEO.png', 'Dhananjay Gupta', 'xtar', 'c20ad4d76fe97759aa27a0c99bff6710', 'Admin', '2022-09-29 13:39:51'),
(18, 'Pro_1855902650_2022-09-30_XtarNitin.png', 'Ajay Gupta', 'ajay', 'c20ad4d76fe97759aa27a0c99bff6710', 'Normal User', '2022-09-30 19:58:15');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `about`
--
ALTER TABLE `about`
  ADD PRIMARY KEY (`About_ID`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`Category_ID`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`Contact_ID`);

--
-- Indexes for table `contactinfo`
--
ALTER TABLE `contactinfo`
  ADD PRIMARY KEY (`CInfo_ID`);

--
-- Indexes for table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`Course_ID`);

--
-- Indexes for table `feature`
--
ALTER TABLE `feature`
  ADD PRIMARY KEY (`Feature_ID`);

--
-- Indexes for table `inquiry`
--
ALTER TABLE `inquiry`
  ADD PRIMARY KEY (`Message_ID`);

--
-- Indexes for table `qn`
--
ALTER TABLE `qn`
  ADD PRIMARY KEY (`QN_ID`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`SN`);

--
-- Indexes for table `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`Team_ID`);

--
-- Indexes for table `topstudent`
--
ALTER TABLE `topstudent`
  ADD PRIMARY KEY (`TopStudent_ID`);

--
-- Indexes for table `totalviews`
--
ALTER TABLE `totalviews`
  ADD PRIMARY KEY (`TotalViews_ID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`User_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `about`
--
ALTER TABLE `about`
  MODIFY `About_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `Category_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `Contact_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;

--
-- AUTO_INCREMENT for table `contactinfo`
--
ALTER TABLE `contactinfo`
  MODIFY `CInfo_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `course`
--
ALTER TABLE `course`
  MODIFY `Course_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=123;

--
-- AUTO_INCREMENT for table `feature`
--
ALTER TABLE `feature`
  MODIFY `Feature_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `inquiry`
--
ALTER TABLE `inquiry`
  MODIFY `Message_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT for table `qn`
--
ALTER TABLE `qn`
  MODIFY `QN_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `SN` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;

--
-- AUTO_INCREMENT for table `team`
--
ALTER TABLE `team`
  MODIFY `Team_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `topstudent`
--
ALTER TABLE `topstudent`
  MODIFY `TopStudent_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=171;

--
-- AUTO_INCREMENT for table `totalviews`
--
ALTER TABLE `totalviews`
  MODIFY `TotalViews_ID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `User_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
